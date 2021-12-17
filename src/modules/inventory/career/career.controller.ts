import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Career } from './career.entity';
import { CareerService } from './career.service';

@Crud({
  model: {
    type: Career,
  },
})
@ApiTags('Career')
@Controller('careers')
export class CareerController implements CrudController<Career> {
  constructor(public service: CareerService) {}
}
