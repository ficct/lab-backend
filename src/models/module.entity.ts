import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Faculty } from './faculty.entity';
import { Place } from './place.entity';
@Entity()
export class Modulo {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) identification: string;

  @ManyToOne(() => Faculty, (faculty) => faculty.modules)
  faculty: Faculty;

  @OneToMany(() => Place, (place) => place.module)
  places: Place[];
}
