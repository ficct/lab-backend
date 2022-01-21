import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserAction } from 'entities/UserAction';
export declare class UserActionService extends TypeOrmCrudService<UserAction> {
    constructor(repo: any);
}
