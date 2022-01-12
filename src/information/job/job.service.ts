import { Injectable } from '@nestjs/common';
import { CrudRequest } from '@nestjsx/crud';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { JobTitle } from 'entities/JobTitle';

@Injectable()
export class JobService extends TypeOrmCrudService<JobTitle> {
  constructor(@InjectRepository(JobTitle) repo) {
    super(repo);
  }

  getOne(req: CrudRequest): Promise<JobTitle> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: ['subJobs', 'supJob'],
    });
  }
}
