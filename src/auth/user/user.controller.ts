import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';

import { Crud, CrudController } from '@nestjsx/crud';

import { User } from 'entities/User';
import { UserService } from './user.service';
import { Response } from 'express';

@Crud({
  model: { type: User },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@ApiTags('users')
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}

  @Get('/:id/send')
  async resendMail(@Param('id') id: number, @Res() res: Response<boolean>) {
    try {
      await this.service.resendMail(id);
      return res.status(HttpStatus.ACCEPTED).send(true);
    } catch (err) {
      console.error(err);
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(false);
  }

  @Get('/:id/confirm')
  async confirmMail(
    @Param('id') id: number,
    @Query('token') token: string,
    @Res() res: Response<boolean>,
  ) {
    try {
      return res
        .status(HttpStatus.ACCEPTED)
        .send(await this.service.confirmMail(id, token));
    } catch (err) {
      console.error(err);
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(false);
  }
}
