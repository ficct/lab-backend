import {
  Index,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Place } from './Place';
import { Movement } from './Movement';
import { EquipmentUnit } from './EquipmentUnit';
import { EquipmentType } from './EquipmentType';
import { EquipmentBrand } from './EquipmentBrand';

@Index('code', ['code'], { unique: true })
@Index('FKEquipment753314', ['equipmentTypeid'], {})
@Index('FKEquipment950424', ['equipmentBrandid'], {})
@Index('FKEquipment921418', ['unitid'], {})
@Entity('Equipment', { schema: 'ficct' })
export class Equipment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
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

  @Column('int', { name: 'Unitid', select: false })
  unitid: number;

  @Column('int', { name: 'Placeid', nullable: true, select: false })
  placeid?: number;

  @Column('int', { name: 'EquipmentBrandid', select: false })
  equipmentBrandid: number;

  @Column('int', { name: 'EquipmentTypeid', select: false })
  equipmentTypeid: number;

  @Column('varchar', { name: 'photo_id', nullable: true, length: 255 })
  photoId?: string;

  @ManyToOne(() => EquipmentType, (type) => type.equipment, {
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'EquipmentTypeid', referencedColumnName: 'id' })
  equipmentType: EquipmentType;

  @ManyToOne(() => EquipmentUnit, (unit) => unit.equipment, {
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'Unitid', referencedColumnName: 'id' })
  unit: EquipmentUnit;

  @ManyToOne(() => EquipmentBrand, (brand) => brand.equipment, {
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
  })
  @JoinColumn({ name: 'EquipmentBrandid', referencedColumnName: 'id' })
  equipmentBrand: EquipmentBrand;

  @OneToMany(() => Movement, (movement) => movement.equipment)
  movements: Movement[];

  @ManyToOne(() => Place, (place) => place.equipments)
  @JoinColumn({ name: 'Placeid', referencedColumnName: 'id' })
  place: Place;
}
