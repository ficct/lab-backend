import { CrudController } from '@nestjsx/crud';
import { UserAction } from 'entities/UserAction';
import { UserActionService } from './user-action.service';
export declare class UserActionController implements CrudController<UserAction> {
    service: UserActionService;
    constructor(service: UserActionService);
}
