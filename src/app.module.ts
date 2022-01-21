import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { InventoryModule } from './inventory/inventory.module';
import { InformationModule } from './information/information.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    //
    AuthModule,
    InventoryModule,
    InformationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
