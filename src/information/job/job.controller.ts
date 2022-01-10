import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { JobService } from './job.service';
import { JobTitle } from 'entities/JobTitle';

@Crud({
  model: { type: JobTitle },
})
@ApiTags('jobs')
@Controller('jobs')
export class JobController implements CrudController<JobTitle> {
  constructor(public service: JobService) {}
}
