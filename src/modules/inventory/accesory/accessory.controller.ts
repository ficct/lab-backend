import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Accessory } from 'src/modules/inventory/accesory/accessory.entity';
import { AccessoryService } from 'src/modules/inventory/accesory/accessory.service';

@Crud({
  model: {
    type: Accessory,
  },
})
@ApiTags('Accessory')
@Controller('accessories ')
export class AccessoryController implements CrudController<Accessory> {
  constructor(public service: AccessoryService) {}
}
