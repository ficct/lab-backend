import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Role } from 'src/models/role.entity';
@Injectable()
export class RoleService extends TypeOrmCrudService<Role> {
  constructor(@InjectRepository(Role) repo) {
    super(repo);
  }
}
