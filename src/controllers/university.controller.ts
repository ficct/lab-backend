import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { University } from 'src/models/university.entity';
import { UniversityService } from 'src/services/university.service';

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
