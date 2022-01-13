import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Equipment } from 'entities/Equipment';

interface QueryEquipmentOptions {
  page: number;
  limit: number;
  placeId?: number;
  search?: string;
}

@Injectable()
export class EquipmentService extends TypeOrmCrudService<Equipment> {
  constructor(@InjectRepository(Equipment) repo) {
    super(repo);
  }

  getManyWithQuery(query: QueryEquipmentOptions) {
    const { limit, page, placeId, search } = query;

    const queryBuilder = this.repo
      .createQueryBuilder('e')
      .leftJoinAndSelect('e.unit', 'u')
      .leftJoinAndSelect('e.equipmentType', 't')
      .leftJoinAndSelect('e.equipmentBrand', 'b');

    search &&
      queryBuilder
        .where(`u.name like %${search}%`)
        .orWhere(`t.name like %${search}%`)
        .orWhere(`b.name like %${search}%`)
        .orWhere(`e.code like %${search}%`)
        .orWhere(`e.state like %${search}%`)
        .orWhere(`e.description like %${search}%`)
        .orWhere(`e.observations like %${search}%`);

    placeId && queryBuilder.andWhere(`e.placeid = ${placeId}`);

    return queryBuilder
      .skip(limit * page)
      .take(limit)
      .getMany();
  }

  getOne(req: CrudRequest): Promise<Equipment> {
    const [paramId] = req.parsed.paramsFilter;

    return this.repo.findOne(paramId.value, {
      relations: [
        'unit',
        'equipmentType',
        'equipmentBrand',
        'place',
        'movements',
        'movements.reason',
        'movements.placeTo',
        'movements.placeFrom',
      ],
    });
  }
}
