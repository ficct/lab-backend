import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { Kardex } from './user/kardex.entity';
import { UserService } from './user/user.service';

import { Role } from './role/role.entity';
import { RoleService } from './role/role.service';
import { RoleController } from './role/role.controller';

import { Permission } from './permission/permission.entity';
import { PermissionService } from './permission/permission.service';
import { PermissionController } from './permission/permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Permission, Kardex])],
  controllers: [RoleController, PermissionController],
  providers: [UserService, RoleService, PermissionService],
  exports: [UserService],
})
export class UserModule {}
