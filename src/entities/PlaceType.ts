import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Place } from './Place';

@Index('name', ['name'], { unique: true })
@Entity('PlaceType', { schema: 'ficct' })
export class PlaceType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 50 })
  name: string;

  @OneToMany(() => Place, (place) => place.type)
  places: Place[];
}
