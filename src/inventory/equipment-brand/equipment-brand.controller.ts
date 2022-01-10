import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { EquipmentBrand } from 'entities/EquipmentBrand';
import { EquipmentBrandService } from './equipment-brand.service';

@Crud({
  model: { type: EquipmentBrand },
})
@Controller('equipment-brands')
export class EquipmentBrandController
  implements CrudController<EquipmentBrand>
{
  constructor(public service: EquipmentBrandService) {}
}
