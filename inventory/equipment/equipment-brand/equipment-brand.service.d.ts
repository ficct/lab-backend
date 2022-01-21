import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EquipmentBrand } from 'entities/EquipmentBrand';
export declare class EquipmentBrandService extends TypeOrmCrudService<EquipmentBrand> {
    constructor(repo: any);
}
