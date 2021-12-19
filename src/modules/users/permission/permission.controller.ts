import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Permission } from './permission.entity';
import { PermissionService } from 'src/modules/users/permission/permission.service';

@Crud({
  model: {
    type: Permission,
  },
})
@Controller('permissions')
export class PermissionController implements CrudController<Permission> {
  constructor(public service: PermissionService) {}
}
