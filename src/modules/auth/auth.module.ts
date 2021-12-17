import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { Kardex } from './user/kardex.entity';
import { Permission } from './permission/permission.entity';

import { InventoryModule } from '../inventory/inventory.module';

@Module({
  imports: [
    InventoryModule,
    TypeOrmModule.forFeature([User, Role, Permission, Kardex]),
  ],
})
export class AuthModule {}
