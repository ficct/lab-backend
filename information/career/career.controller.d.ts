import { CrudController } from '@nestjsx/crud';
import { Career } from 'entities/Career';
import { CareerService } from './career.service';
export declare class CareerController implements CrudController<Career> {
    service: CareerService;
    constructor(service: CareerService);
}
