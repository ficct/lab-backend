import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { Faculty } from './faculty.entity';
import { FacultyService } from './faculty.service';

@Crud({
  model: {
    type: Faculty,
  },
})
@ApiTags('Faculty')
@Controller('faculties')
export class FacultyController implements CrudController<Faculty> {
  constructor(public service: FacultyService) {}
}
