import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Modulo } from 'src/models/module.entity';

import { ModuleService } from 'src/services/module.service';

@Crud({
  model: {
    type: Modulo,
  },
})
@Controller('modules')
export class ModuleController implements CrudController<Modulo> {
  constructor(public service: ModuleService) {}
}
