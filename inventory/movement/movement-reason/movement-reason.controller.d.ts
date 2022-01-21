import { CrudController } from '@nestjsx/crud';
import { MovementReason } from 'entities/MovementReason';
import { MovementReasonService } from './movement-reason.service';
export declare class MovementReasonController implements CrudController<MovementReason> {
    service: MovementReasonService;
    constructor(service: MovementReasonService);
}
