import { Transaction } from './transaction.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) lastname: string;
  @Column({ type: 'varchar' }) email: string;
  @Column({ type: 'varchar' }) code: string;
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
