import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Career } from 'entities/Career';
export declare class CareerService extends TypeOrmCrudService<Career> {
    constructor(repo: any);
}
