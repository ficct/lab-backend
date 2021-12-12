import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { University } from 'src/modules/inventory/university/university.entity';
import { UniversityService } from 'src/modules/inventory/university/university.service';

@Crud({
  model: {
    type: University,
  },
})
@ApiTags('University')
@Controller('universities')
export class UniversityController implements CrudController<University> {
  constructor(public service: UniversityService) {}
}
