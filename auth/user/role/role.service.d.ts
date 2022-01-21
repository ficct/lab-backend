import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Role } from 'entities/Role';
export declare class RoleService extends TypeOrmCrudService<Role> {
    constructor(repo: any);
}
