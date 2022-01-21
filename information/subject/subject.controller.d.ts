import { Response } from 'express';
import { CrudController } from '@nestjsx/crud';
import { Subject } from 'entities/Subject';
import { SubjectService } from './subject.service';
export declare class SubjectController implements CrudController<Subject> {
    service: SubjectService;
    constructor(service: SubjectService);
    findAll(query: any, res: Response<Subject[]>): Promise<Response<Subject[], Record<string, any>>>;
}
