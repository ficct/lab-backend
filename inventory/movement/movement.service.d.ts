import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Movement } from 'entities/Movement';
export declare class MovementService extends TypeOrmCrudService<Movement> {
    constructor(repo: any);
}
