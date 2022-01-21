import { CrudController } from '@nestjsx/crud';
import { EquipmentType } from 'entities/EquipmentType';
import { EquipmentTypeService } from './equipment-type.service';
export declare class EquipmentTypeController implements CrudController<EquipmentType> {
    service: EquipmentTypeService;
    constructor(service: EquipmentTypeService);
}
