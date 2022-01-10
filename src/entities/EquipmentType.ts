import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipment } from './Equipment';

@Index('name', ['name'], { unique: true })
@Entity('EquipmentType', { schema: 'ficct' })
export class EquipmentType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 50 })
  name: string;

  @OneToMany(() => Equipment, (equipment) => equipment.equipmentType)
  equipment: Equipment[];
}
