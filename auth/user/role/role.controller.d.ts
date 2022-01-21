import { CrudController } from '@nestjsx/crud';
import { Role } from 'entities/Role';
import { RoleService } from './role.service';
export declare class RoleController implements CrudController<Role> {
    service: RoleService;
    constructor(service: RoleService);
}
