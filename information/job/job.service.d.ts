import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { JobTitle } from 'entities/JobTitle';
export declare class JobService extends TypeOrmCrudService<JobTitle> {
    constructor(repo: any);
    getOne(req: CrudRequest): Promise<JobTitle>;
    private seedJobs;
    seed(): Promise<void>;
}
