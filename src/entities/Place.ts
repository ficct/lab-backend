import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToOne,
  OneToMany,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Equipment } from './Equipment';

import { Movement } from './Movement';
import { PlaceType } from './PlaceType';

@Index('code', ['code'], { unique: true })
@Index('FKPlace446570', ['typeid'], {})
@Entity('Place', { schema: 'ficct' })
export class Place {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code', unique: true, length: 20 })
  code: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description?: string;

  @Column('int', { name: 'Typeid', select: false })
  typeid: number;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl?: string;

  @Column('varchar', { name: 'photo_id', nullable: true, length: 255 })
  photoId?: string;

  @OneToMany(() => Movement, (movement) => movement.placeTo)
  movements: Movement[];

  @OneToMany(() => Movement, (movement) => movement.placeFrom)
  movements2: Movement[];

  @ManyToOne(() => PlaceType, (placeType) => placeType.places, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Typeid', referencedColumnName: 'id' }])
  type: PlaceType;

  @ManyToMany(() => Place, { onUpdate: 'NO ACTION', onDelete: 'NO ACTION' })
  @JoinTable({
    name: 'Place_Place',
    joinColumn: { name: 'placeParent_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'placeChild_id', referencedColumnName: 'id' },
  })
  places: Place[];

  @OneToMany(() => Equipment, (equipment) => equipment.place)
  equipments: Equipment[];
}
