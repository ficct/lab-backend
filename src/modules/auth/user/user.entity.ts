import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Role } from '../role/role.entity';
import { Transaction } from 'src/modules/inventory/place/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) lastname: string;
  @Column({ type: 'varchar' }) email: string;
  @Column({ type: 'int' }) ci: number;
  @Column({ type: 'bool' }) high_drop: boolean;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Transaction, (transaction) => transaction.owner)
  transactions_owner: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.recipient)
  transactions_recipient: Transaction[];
}
