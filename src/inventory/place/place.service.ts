import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest, GetManyDefaultResponse } from '@nestjsx/crud';

import { Place } from 'entities/Place';
import { PlaceTypeService } from './place-type/place-type.service';

@Injectable()
export class PlaceService extends TypeOrmCrudService<Place> {
  constructor(@InjectRepository(Place) repo, private type: PlaceTypeService) {
    super(repo);
  }

  async getMany(
    req: CrudRequest,
  ): Promise<Place[] | GetManyDefaultResponse<Place>> {
    const { page = 0, limit = 10 } = req.parsed;
    const { id } = await this.type.findOne({ order: { id: 'ASC' } });

    return this.repo.find({
      take: limit,
      skip: page * limit,
      where: { typeid: id },
      relations: ['type', 'places', 'places.type'],
    });
  }

  getOne(req: CrudRequest): Promise<Place> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: ['type', 'places', 'places.type'],
    });
  }
}
