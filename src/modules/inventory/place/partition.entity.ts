import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Program } from './program.entity';

@Entity()
export class Partition {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) version: string;

  @ManyToMany(() => Program)
  @JoinTable()
  programs: Program[];
}
