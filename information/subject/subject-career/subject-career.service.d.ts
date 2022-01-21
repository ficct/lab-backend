import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SubjectCareer } from 'entities/SubjectCareer';
export declare class SubjectCareerService extends TypeOrmCrudService<SubjectCareer> {
    constructor(repo: any);
}
