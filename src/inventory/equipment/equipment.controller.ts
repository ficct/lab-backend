import { Response } from 'express';

import { Crud, CrudController } from '@nestjsx/crud';
import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';

import { Equipment } from 'entities/Equipment';
import { EquipmentService } from './equipment.service';

@Crud({
  model: { type: Equipment },
})
@Controller('equipments')
export class EquipmentController implements CrudController<Equipment> {
  constructor(public service: EquipmentService) {}

  @Get('/')
  async findAll(@Query() query, @Res() res: Response<Equipment[]>) {
    let { placeId } = query;
    const { limit = 10, page = 0, search = null } = query;

    placeId = Number.parseInt(placeId);

    try {
      return res.status(HttpStatus.ACCEPTED).send(
        await this.service.getManyWithQuery({
          page,
          limit,
          search,
          placeId: isNaN(placeId) ? null : placeId,
        }),
      );
    } catch (err) {
      console.error(err);
    }
    return res.status(HttpStatus.NO_CONTENT).send([]);
  }
}
