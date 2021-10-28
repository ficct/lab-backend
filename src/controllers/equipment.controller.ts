import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Equipment } from 'src/models/equipment.entity';
import { EquipmentService } from 'src/services/equipment.service';

@Crud({
  model: {
    type: Equipment,
  },
})
@ApiTags('Equipment')
@Controller('equipments')
export class EquipmentController implements CrudController<Equipment> {
  constructor(public service: EquipmentService) {}
}
