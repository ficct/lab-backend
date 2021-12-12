import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from 'src/modules/task/task/task.entity';
import { TaskService } from 'src/modules/task/task/task.service';
import { TaskController } from 'src/modules/task/task/task.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
