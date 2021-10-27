import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Accessory } from 'src/models/accessory.entity';
import { AccessoryService } from 'src/services/accessory.service';

@Crud({
  model: {
    type: Accessory,
  },
})
@Controller('accessories ')
export class AccessoryController implements CrudController<Accessory> {
  constructor(public service: AccessoryService) {}
}
