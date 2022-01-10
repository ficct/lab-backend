import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { MovementReason } from 'entities/MovementReason';

import { MovementReasonService } from './movement-reason.service';

@Crud({
  model: { type: MovementReason },
})
@Controller('movement-reason')
export class MovementReasonController
  implements CrudController<MovementReason>
{
  constructor(public service: MovementReasonService) {}
}
