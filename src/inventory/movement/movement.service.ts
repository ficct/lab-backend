import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Movement } from 'entities/Movement';
import { EquipmentService } from '../equipment/equipment.service';

@Injectable()
export class MovementService extends TypeOrmCrudService<Movement> {
  constructor(
    @InjectRepository(Movement) repo,
    private equipmentService: EquipmentService,
  ) {
    super(repo);
  }

  async makeTransaction(movementJSON, equipmentIDs: number[] = []) {
    if (!equipmentIDs.length) {
      return false;
    }

    const [movement] = this.repo.create(movementJSON);

    try {
      await Promise.all([
        this.repo
          .createQueryBuilder()
          .setLock('pessimistic_write_or_fail')
          .useTransaction(true)
          .insert()
          .into(Movement)
          .values(
            equipmentIDs.map((equipmentId) => {
              movement.equipmentid = equipmentId;
              return movement;
            }),
          )
          .execute(),
        this.equipmentService.repo
          .createQueryBuilder()
          .setLock('pessimistic_write_or_fail')
          .useTransaction(true)
          .update()
          .set({ placeid: movement.placeToId })
          .where(`id IN (${equipmentIDs.join(',')})`)
          .execute(),
      ]);

      return true;
    } catch (err) {
      console.error(err);
    }
    return false;
  }
}
