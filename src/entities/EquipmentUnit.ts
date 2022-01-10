import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipment } from './Equipment';

@Index('name', ['name'], { unique: true })
@Entity('EquipmentUnit', { schema: 'ficct' })
export class EquipmentUnit {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 10 })
  name: string;

  @OneToMany(() => Equipment, (equipment) => equipment.unit)
  equipment: Equipment[];
}
