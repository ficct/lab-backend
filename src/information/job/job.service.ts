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

  private async seedJobs(jobs: any[] = [], supJobTitleId?: number) {
    for (const { name, subJobs } of jobs) {
      const job = await this.repo.create({ name, supJobTitleId });
      await this.seedJobs(subJobs, job.id);
    }
  }

  async seed() {
    try {
      const jobCount = await this.repo.count();
      if (jobCount) {
        await this.seedJobs([job]);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
