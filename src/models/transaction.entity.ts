import { Equipment } from 'src/models/equipment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Place } from './place.entity';
import { User } from './user.entity';
@Entity()
export class Transaction {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;

  @ManyToMany(() => Equipment)
  @JoinTable()
  equipments: Equipment[];

  @ManyToOne(() => User, (user) => user.transactions_owner)
  owner: User;

  @ManyToOne(() => User, (user) => user.transactions_recipient)
  recipient: User;

  @ManyToOne(() => Place, (place) => place.transactions_origin)
  origin: Place;

  @ManyToOne(() => Place, (place) => place.transactions_destination)
  destination: Place;
}
