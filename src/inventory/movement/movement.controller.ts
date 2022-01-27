import { Response } from 'express';

import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { Crud, CrudController } from '@nestjsx/crud';

import { Movement } from 'entities/Movement';

import { MovementService } from './movement.service';

@Crud({
  model: { type: Movement },
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
@ApiTags('movements')
@Controller('movements')
export class MovementController implements CrudController<Movement> {
  constructor(public service: MovementService) {}

  @Post('/make-transaction')
  async makeTransaction(@Body() body, @Res() res: Response<boolean>) {
    const { equipmentIDs = [] as number[], movement } = body;
    try {
      const isSuccess = await this.service.makeTransaction(
        movement,
        equipmentIDs,
      );
      return res.status(HttpStatus.ACCEPTED).send(isSuccess);
    } catch (err) {
      console.error(err);
    }
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(false);
  }
}
