import { CrudController } from '@nestjsx/crud';
import { EquipmentBrand } from 'entities/EquipmentBrand';
import { EquipmentBrandService } from './equipment-brand.service';
export declare class EquipmentBrandController implements CrudController<EquipmentBrand> {
    service: EquipmentBrandService;
    constructor(service: EquipmentBrandService);
}
