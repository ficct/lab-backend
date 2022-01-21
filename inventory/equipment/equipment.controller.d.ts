import { Response } from 'express';
import { CrudController } from '@nestjsx/crud';
import { Equipment } from 'entities/Equipment';
import { EquipmentService } from './equipment.service';
export declare class EquipmentController implements CrudController<Equipment> {
    service: EquipmentService;
    constructor(service: EquipmentService);
    findAll(query: any, res: Response<Equipment[]>): Promise<Response<Equipment[], Record<string, any>>>;
}
