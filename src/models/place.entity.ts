import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Equipment } from './equipment.entity';
import { Material } from './material.entity';
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
}
