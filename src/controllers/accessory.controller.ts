import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Accessory } from 'src/models/accessory.entity';
import { AccessoryService } from 'src/services/accessory.service';

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
