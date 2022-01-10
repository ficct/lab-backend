import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { JobTitle } from 'entities/JobTitle';

@Injectable()
export class JobService extends TypeOrmCrudService<JobTitle> {
  constructor(@InjectRepository(JobTitle) repo) {
    super(repo);
  }
}
