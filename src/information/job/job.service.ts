import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { job } from './jobs.json';
import { JobTitle } from 'entities/JobTitle';

@Injectable()
export class JobService extends TypeOrmCrudService<JobTitle> {
  constructor(@InjectRepository(JobTitle) repo) {
    super(repo);
  }

  async getOne(req: CrudRequest): Promise<JobTitle> {
    const [paramId] = req.parsed.paramsFilter;

    const job = await this.repo.findOne(paramId.value, {
      relations: ['subJobs'],
    });

    for (let index = 0; index < job.subJobs.length; index++) {
      const subJob = job.subJobs[index];
      paramId.value = subJob.id;
      req.parsed.paramsFilter = [paramId];
      job.subJobs[index] = await this.getOne(req);
    }

    return job;
  }

  async seed() {
    const jobCount = await this.repo.count();
    if (!jobCount) {
      await this.repo.save(this.repo.create(job));
    }
  }
}
