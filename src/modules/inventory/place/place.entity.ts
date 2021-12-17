import {
  Entity,
  Column,
  OneToOne,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Endowment } from './endowment.entity';
import { PlaceType } from './place_type.entity';
import { Modulo } from '../module/module.entity';
import { Transaction } from './transaction.entity';
import { Material } from '../material/material.entity';
import { Equipment } from '../equipment/equipment.entity';
@Entity()
export class Place {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) place_code: string;
  @Column({ type: 'int' }) capacity: number;
  @Column({ type: 'bool', default: true }) high_drop: boolean; // Alta-Baja

  // RELATIONS:
  @OneToMany(() => Equipment, (equipment) => equipment.place)
  equipments: Equipment[];

  @OneToMany(() => Material, (material) => material.place)
  materials: Material[];

  @OneToMany(() => Endowment, (endowment) => endowment.place)
  endowments: Endowment[];

  @ManyToOne(() => Modulo, (module) => module.places)
  module: Modulo;

  @OneToOne(() => PlaceType)
  @JoinColumn()
  place_type: PlaceType;

  @OneToMany(() => Transaction, (transaction) => transaction.origin)
  transactions_origin: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.destination)
  transactions_destination: Transaction[];
}
