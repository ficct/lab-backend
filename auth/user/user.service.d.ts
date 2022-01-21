import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from 'entities/User';
export declare class UserService extends TypeOrmCrudService<User> {
    constructor(repo: any);
    getOne(req: CrudRequest): Promise<User>;
}
