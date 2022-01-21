import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EquipmentUnit } from 'entities/EquipmentUnit';
export declare class EquipmentUnitService extends TypeOrmCrudService<EquipmentUnit> {
    constructor(repo: any);
}
