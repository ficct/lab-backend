import { CrudController } from '@nestjsx/crud';
import { EquipmentUnit } from 'entities/EquipmentUnit';
import { EquipmentUnitService } from './equipment-unit.service';
export declare class EquipmentUnitController implements CrudController<EquipmentUnit> {
    service: EquipmentUnitService;
    constructor(service: EquipmentUnitService);
}
