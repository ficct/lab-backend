import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Movement } from './Movement';
import { PlaceType } from './PlaceType';
import { PlacePlace } from './PlacePlace';
import { UserPlace } from './UserPlace';

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
  description: string | null;

  @Column('int', { name: 'Typeid' })
  typeid: number;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl: string | null;

  @Column('varchar', { name: 'photo_id', nullable: true, length: 255 })
  photoId: string | null;

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

  @OneToMany(() => PlacePlace, (placePlace) => placePlace.placeChild)
  placePlaces: PlacePlace[];

  @OneToMany(() => PlacePlace, (placePlace) => placePlace.placeParent)
  placePlaces2: PlacePlace[];

  @OneToMany(() => UserPlace, (userPlace) => userPlace.place)
  userPlaces: UserPlace[];
}
