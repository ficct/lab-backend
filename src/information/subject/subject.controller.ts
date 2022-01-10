import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { SubjectService } from './subject.service';
import { Subject } from 'entities/Subject';

@Crud({
  model: { type: Subject },
})
@ApiTags('subjects')
@Controller('subjects')
export class SubjectController implements CrudController<Subject> {
  constructor(public service: SubjectService) {}
}
