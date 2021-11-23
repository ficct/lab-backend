import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';
@Entity()
export class Role {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
