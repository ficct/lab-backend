import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EquipmentType } from './EquipmentType';
import { EquipmentUnit } from './EquipmentUnit';
import { EquipmentBrand } from './EquipmentBrand';
import { Movement } from './Movement';

@Index('code', ['code'], { unique: true })
@Index('FKEquipment753314', ['equipmentTypeid'], {})
@Index('FKEquipment921418', ['unitid'], {})
@Index('FKEquipment950424', ['equipmentBrandid'], {})
@Entity('Equipment', { schema: 'ficct' })
export class Equipment {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('text', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'code', unique: true, length: 100 })
  code: string;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl?: string;

  @Column('varchar', { name: 'state', length: 50 })
  state: string;

  @Column('text', { name: 'observations', nullable: true })
  observations?: string;

  @Column('int', { name: 'Unitid' })
  unitid: number;

  @Column('int', { name: 'Placeid', nullable: true })
  placeid?: number;

  @Column('int', { name: 'EquipmentBrandid' })
  equipmentBrandid: number;

  @Column('int', { name: 'EquipmentTypeid' })
  equipmentTypeid: number;

  @Column('varchar', { name: 'photo_id', nullable: true, length: 255 })
  photoId?: string;

  @ManyToOne(() => EquipmentType, (equipmentType) => equipmentType.equipment, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'EquipmentTypeid', referencedColumnName: 'id' }])
  equipmentType: EquipmentType;

  @ManyToOne(() => EquipmentUnit, (equipmentUnit) => equipmentUnit.equipment, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Unitid', referencedColumnName: 'id' }])
  unit: EquipmentUnit;

  @ManyToOne(
    () => EquipmentBrand,
    (equipmentBrand) => equipmentBrand.equipment,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'EquipmentBrandid', referencedColumnName: 'id' }])
  equipmentBrand: EquipmentBrand;

  @OneToMany(() => Movement, (movement) => movement.equipment)
  movements: Movement[];
}
