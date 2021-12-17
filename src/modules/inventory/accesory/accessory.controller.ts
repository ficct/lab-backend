import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Accessory } from './accessory.entity';
import { AccessoryService } from './accessory.service';

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
