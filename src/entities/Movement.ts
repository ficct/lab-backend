import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MovementReason } from './MovementReason';
import { Place } from './Place';
import { Equipment } from './Equipment';

@Index('FKMovement111260', ['reasonid'], {})
@Index('FKMovement114181', ['placeToId'], {})
@Index('FKMovement513408', ['placeFromId'], {})
@Index('FKMovement329029', ['equipmentid'], {})
@Entity('Movement', { schema: 'ficct' })
export class Movement {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'Reasonid' })
  reasonid: number;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'Equipmentid' })
  equipmentid: number;

  @Column('int', { name: 'placeFrom_id', nullable: true })
  placeFromId: number | null;

  @Column('int', { name: 'placeTo_id', nullable: true })
  placeToId: number | null;

  @Column('int', { name: 'Userid', nullable: true })
  userid: number | null;

  @ManyToOne(
    () => MovementReason,
    (movementReason) => movementReason.movements,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'Reasonid', referencedColumnName: 'id' }])
  reason: MovementReason;

  @ManyToOne(() => Place, (place) => place.movements, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'placeTo_id', referencedColumnName: 'id' }])
  placeTo: Place;

  @ManyToOne(() => Equipment, (equipment) => equipment.movements, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Equipmentid', referencedColumnName: 'id' }])
  equipment: Equipment;

  @ManyToOne(() => Place, (place) => place.movements2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'placeFrom_id', referencedColumnName: 'id' }])
  placeFrom: Place;
}
