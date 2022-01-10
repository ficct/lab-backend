import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Movement } from 'entities/Movement';
import { MovementService } from './movement.service';

@Crud({
  model: { type: Movement },
})
@ApiTags('movements')
@Controller('movements')
export class MovementController implements CrudController<Movement> {
  constructor(public service: MovementService) {}
}
