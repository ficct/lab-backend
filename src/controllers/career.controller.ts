import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Career } from 'src/models/career.entity';
import { CareerService } from 'src/services/career.service';

@Crud({
  model: {
    type: Career,
  },
})
@Controller('careers')
export class CareerController implements CrudController<Career> {
  constructor(public service: CareerService) {}
}
