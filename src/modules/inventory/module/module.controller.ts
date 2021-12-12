import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Modulo } from 'src/modules/inventory/module/module.entity';

import { ModuleService } from 'src/modules/inventory/module/module.service';

@Crud({
  model: {
    type: Modulo,
  },
})
@ApiTags('Modulo')
@Controller('modules')
export class ModuleController implements CrudController<Modulo> {
  constructor(public service: ModuleService) {}
}
