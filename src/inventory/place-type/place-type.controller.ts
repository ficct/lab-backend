import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { PlaceType } from 'entities/PlaceType';
import { PlaceTypeService } from './place-type.service';

@Crud({
  model: { type: PlaceType },
})
@Controller('place-type')
export class PlaceTypeController implements CrudController<PlaceType> {
  constructor(public service: PlaceTypeService) {}
}
