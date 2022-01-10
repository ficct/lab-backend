import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { EquipmentUnit } from 'entities/EquipmentUnit';
import { EquipmentUnitService } from './equipment-unit.service';

@Crud({
  model: { type: EquipmentUnit },
})
@Controller('equipment-units')
export class EquipmentUnitController implements CrudController<EquipmentUnit> {
  constructor(public service: EquipmentUnitService) {}
}
