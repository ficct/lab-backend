import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

import { Career } from 'src/modules/inventory/career/career.entity';
import { CareerService } from 'src/modules/inventory/career/career.service';

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
