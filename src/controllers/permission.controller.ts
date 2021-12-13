import { Permission } from './../models/permission.entity';
import { RoleService } from './../services/role.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { PermissionService } from 'src/services/permission.service';

@Crud({
  model: {
    type: Permission,
  },
})
@Controller('permissions')
export class PermissionController implements CrudController<Permission> {
  constructor(public service: PermissionService) {}
}
