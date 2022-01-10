import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { MovementReason } from 'entities/MovementReason';

import { MovementReasonService } from './movement-reason.service';

@Crud({
  model: { type: MovementReason },
})
@ApiTags('movement-reasons')
@Controller('movement-reasons')
export class MovementReasonController
  implements CrudController<MovementReason>
{
  constructor(public service: MovementReasonService) {}
}
