import * as bcrypt from 'bcrypt';

import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';

import { Role } from '../role/role.entity';
import { Transaction } from 'src/modules/inventory/place/transaction.entity';
import { Allocation } from 'src/modules/inventory/equipment/allocation.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) lastname: string;
  @Column({ type: 'varchar' }) email: string;
  @Column({ type: 'varchar' }) password: string;
  @Column({ type: 'varchar' }) code: string;
  @Column({ type: 'int' }) ci: number;
  @Column({ type: 'bool' }) high_drop: boolean;
  @CreateDateColumn() created_on?: Date;
  @CreateDateColumn() updated_on?: Date;

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Allocation, (alloc) => alloc.user, { cascade: true })
  allocations: Allocation[];

  @OneToMany(() => Transaction, (transaction) => transaction.owner)
  transactions_owner: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.recipient)
  transactions_recipient: Transaction[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
