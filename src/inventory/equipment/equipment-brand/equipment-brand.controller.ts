import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { EquipmentBrand } from 'entities/EquipmentBrand';
import { EquipmentBrandService } from './equipment-brand.service';

@Crud({
  model: { type: EquipmentBrand },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@ApiTags('equipment-brands')
@Controller('equipment-brands')
export class EquipmentBrandController
  implements CrudController<EquipmentBrand>
{
  constructor(public service: EquipmentBrandService) {}
}
