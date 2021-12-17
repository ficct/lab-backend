import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from 'src/modules/tasks/task/task.entity';
import { TaskService } from 'src/modules/tasks/task/task.service';
import { TaskController } from 'src/modules/tasks/task/task.controller';

import { Offer } from 'src/modules/tasks/subjects/offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Offer])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
