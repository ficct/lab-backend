import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { MovementReason } from 'entities/MovementReason';
export declare class MovementReasonService extends TypeOrmCrudService<MovementReason> {
    constructor(repo: any);
}
