import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Task } from 'src/models/task.entity';
@Injectable()
export class TaskService extends TypeOrmCrudService<Task> {
  constructor(@InjectRepository(Task) repo) {
    super(repo);
  }
}
