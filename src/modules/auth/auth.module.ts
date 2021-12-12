import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/modules/auth/user/user.entity';
import { Role } from 'src/modules/auth/role/role.entity';
import { Permission } from 'src/modules/auth/permission/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Permission])],
})
export class AuthModule {}
