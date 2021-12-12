import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Task } from 'src/modules/task/task/task.entity';
import { TaskService } from 'src/modules/task/task/task.service';

@Crud({
  model: {
    type: Task,
  },
})
@Controller('tasks')
export class TaskController implements CrudController<Task> {
  constructor(public service: TaskService) {}
}
