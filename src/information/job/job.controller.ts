import { Response } from 'express';

import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { JobService } from './job.service';
import { JobTitle } from 'entities/JobTitle';

@Crud({
  model: { type: JobTitle },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@ApiTags('jobs')
@Controller('jobs')
export class JobController implements CrudController<JobTitle> {
  constructor(public service: JobService) {}

  @Get('/seed')
  async seedJobs(@Res() res: Response) {
    await this.service.seed();
    return res.status(HttpStatus.ACCEPTED).send('JOBS SEEDED!');
  }
}
