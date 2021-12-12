import { Equipment } from 'src/modules/inventory/equipment/equipment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Place } from '../modules/inventory/place/place.entity';
import { User } from '../modules/auth/user/user.entity';
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
