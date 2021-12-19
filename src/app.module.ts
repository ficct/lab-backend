import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { TaskModule } from './modules/tasks/task.module';
import { ScheduleModule } from './modules/schedules/schedule.module';
import { InventoryModule } from './modules/inventory/inventory.module';

import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),

    AuthModule,

    TaskModule,
    ScheduleModule,
    InventoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
