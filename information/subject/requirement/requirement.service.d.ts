import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Requirement } from 'entities/Requirement';
export declare class RequirementService extends TypeOrmCrudService<Requirement> {
    constructor(repo: any);
}
