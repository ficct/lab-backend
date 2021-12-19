import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Equipment } from './equipment.entity';
import { Material } from '../material/material.entity';
import { User } from 'src/modules/users/user/user.entity';
import { Accessory } from '../accessory/accessory.entity';

@Entity()
export class Allocation {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) code: string;

  @ManyToOne(() => User, (user) => user.allocations)
  user: User;

  @OneToMany(() => Equipment, (equipment) => equipment.allocation, {
    cascade: true,
  })
  equipments: Equipment[];

  @OneToMany(() => Material, (material) => material.allocation, {
    cascade: true,
  })
  materials: Material[];

  @OneToMany(() => Accessory, (accessory) => accessory.allocation, {
    cascade: true,
  })
  accesories: Accessory[];
}
