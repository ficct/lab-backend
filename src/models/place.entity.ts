import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Endowment } from './endowment.entity';
import { Equipment } from './equipment.entity';
import { Material } from './material.entity';
import { Modulo } from './module.entity';
import { PlaceType } from './place_type.entity';
@Entity()
export class Place {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) place_code: string;
  @Column({ type: 'int' }) capacity: number;
  @Column({ type: 'bool' }) high_drop: boolean; // Alta-Baja

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
}
