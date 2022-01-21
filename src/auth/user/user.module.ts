import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'entities/User';
import { Role } from 'entities/Role';
import { UserAction } from 'entities/UserAction';

import { UserService } from './user.service';
import { RoleService } from './role/role.service';
import { UserActionService } from './user-action/user-action.service';

import { UserController } from './user.controller';
import { RoleController } from './role/role.controller';
import { UserActionController } from './user-action/user-action.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, UserAction])],
  providers: [UserService, RoleService, UserActionService],
  controllers: [UserController, RoleController, UserActionController],
  exports: [UserService],
})
export class UserModule {}
