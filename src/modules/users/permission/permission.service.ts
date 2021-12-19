import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Permission } from 'src/modules/users/permission/permission.entity';

@Injectable()
export class PermissionService extends TypeOrmCrudService<Permission> {
  constructor(@InjectRepository(Permission) repo) {
    super(repo);
  }
}
