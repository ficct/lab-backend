import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Equipment } from './Equipment';

@Index('name', ['name'], { unique: true })
@Entity('EquipmentUnit', { schema: 'ficct' })
export class EquipmentUnit {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 10 })
  name: string;

  @OneToMany(() => Equipment, (equipment) => equipment.unit)
  equipment: Equipment[];
}
