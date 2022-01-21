import { CrudController } from '@nestjsx/crud';
import { Movement } from 'entities/Movement';
import { MovementService } from './movement.service';
export declare class MovementController implements CrudController<Movement> {
    service: MovementService;
    constructor(service: MovementService);
}
