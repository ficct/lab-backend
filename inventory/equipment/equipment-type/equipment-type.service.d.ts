import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EquipmentType } from 'entities/EquipmentType';
export declare class EquipmentTypeService extends TypeOrmCrudService<EquipmentType> {
    constructor(repo: any);
}
