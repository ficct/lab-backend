import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { PlaceType } from 'entities/PlaceType';
import { PlaceTypeService } from './place-type.service';

@Crud({
  model: { type: PlaceType },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@ApiTags('place-type')
@Controller('place-types')
export class PlaceTypeController implements CrudController<PlaceType> {
  constructor(public service: PlaceTypeService) {}
}
