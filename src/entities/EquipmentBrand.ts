import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipment } from './Equipment';

@Index('name', ['name'], { unique: true })
@Entity('EquipmentBrand', { schema: 'ficct' })
export class EquipmentBrand {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 50 })
  name: string;

  @OneToMany(() => Equipment, (equipment) => equipment.equipmentBrand)
  equipment: Equipment[];
}
