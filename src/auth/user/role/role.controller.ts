import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Role } from 'entities/Role';
import { RoleService } from './role.service';

@Crud({
  model: { type: Role },
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
@ApiTags('roles')
@Controller('roles')
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) {}
}
