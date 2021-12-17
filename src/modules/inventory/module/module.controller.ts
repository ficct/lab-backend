import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Modulo } from './module.entity';
import { ModuleService } from './module.service';

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
