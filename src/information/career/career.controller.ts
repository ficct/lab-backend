import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Career } from 'entities/Career';
import { CareerService } from './career.service';

@Crud({
  model: { type: Career },
})
@ApiTags('careers')
@Controller('careers')
export class CareerController implements CrudController<Career> {
  constructor(public service: CareerService) {}
}
