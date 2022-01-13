import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

import { Crud, CrudController } from '@nestjsx/crud';

import { User } from 'entities/User';
import { UserService } from './user.service';

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
}
