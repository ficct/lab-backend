import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Equipment } from 'entities/Equipment';
import { EquipmentService } from './equipment.service';

@Crud({
  model: { type: Equipment },
})
@Controller('equipments')
export class EquipmentController implements CrudController<Equipment> {
  constructor(public service: EquipmentService) {}
}
