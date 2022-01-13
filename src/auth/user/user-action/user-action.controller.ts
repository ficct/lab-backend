import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

import { Crud, CrudController } from '@nestjsx/crud';

import { UserAction } from 'entities/UserAction';
import { UserActionService } from './user-action.service';

@Crud({
  model: { type: UserAction },
  routes: {
    only: ['getManyBase', 'getOneBase'],
  },
})
@ApiTags('user-actions')
@Controller('user-action')
export class UserActionController implements CrudController<UserAction> {
  constructor(public service: UserActionService) {}
}
