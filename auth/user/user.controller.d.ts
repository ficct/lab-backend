import { CrudController } from '@nestjsx/crud';
import { User } from 'entities/User';
import { UserService } from './user.service';
export declare class UserController implements CrudController<User> {
    service: UserService;
    constructor(service: UserService);
}
