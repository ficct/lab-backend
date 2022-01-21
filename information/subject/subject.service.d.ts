import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Subject } from 'entities/Subject';
interface QuerySubjectOptions {
    page: number;
    limit: number;
    careerId?: number;
    semester?: number;
}
export declare class SubjectService extends TypeOrmCrudService<Subject> {
    constructor(repo: any);
    getSubjectWithQuery(query: QuerySubjectOptions): Promise<Subject[]>;
    getOne(req: CrudRequest): Promise<Subject>;
}
export {};
