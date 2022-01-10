import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { EquipmentType } from 'entities/EquipmentType';
import { EquipmentTypeService } from './equipment-type.service';

@Crud({
  model: { type: EquipmentType },
})
@Controller('equipment-types')
export class EquipmentTypeController implements CrudController<EquipmentType> {
  constructor(public service: EquipmentTypeService) {}
}
