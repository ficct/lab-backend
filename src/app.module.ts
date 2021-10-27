import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './modules/inventory/inventory.module';
import { TaskModule } from './modules/task/task.module';
import { ScheduleModule } from './modules/schedule/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    InventoryModule,
    TaskModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
