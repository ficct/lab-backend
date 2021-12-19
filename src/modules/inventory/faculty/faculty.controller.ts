import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';

import { Faculty } from './faculty.entity';
import { FacultyService } from './faculty.service';

@Crud({
  model: {
    type: Faculty,
  },
})
@ApiTags('Faculty')
@UseGuards(AuthGuard('jwt'))
@Controller('faculties')
export class FacultyController implements CrudController<Faculty> {
  constructor(public service: FacultyService) {}
}
