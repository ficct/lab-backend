import { RoleService } from './../services/role.service';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Role } from 'src/models/role.entity';

@Crud({
  model: {
    type: Role,
  },
})
@Controller('roles')
export class RoleController implements CrudController<Role> {
  constructor(public service: RoleService) {}
}
