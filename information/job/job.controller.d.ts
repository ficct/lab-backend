import { Response } from 'express';
import { CrudController } from '@nestjsx/crud';
import { JobService } from './job.service';
import { JobTitle } from 'entities/JobTitle';
export declare class JobController implements CrudController<JobTitle> {
    service: JobService;
    constructor(service: JobService);
    seedJobs(res: Response): Promise<Response<any, Record<string, any>>>;
}
