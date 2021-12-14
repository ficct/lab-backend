import { Material } from './material.entity';
import { Equipment } from './equipment.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Accessory } from './accessory.entity';
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
