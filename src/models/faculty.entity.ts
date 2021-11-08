import { Career } from 'src/models/career.entity';
import { University } from 'src/models/university.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Module } from './module.entity';
@Entity()
export class Faculty {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar' }) abbreviation: string;
  @Column({ type: 'varchar' }) code: string;

  @ManyToOne(() => University, (university) => university.faculties)
  university: University;

  @OneToMany(() => Module, (module) => module.faculty)
  modules: Module[];

  @OneToMany(() => Career, (career) => career.faculty)
  careers: Career[];
}
