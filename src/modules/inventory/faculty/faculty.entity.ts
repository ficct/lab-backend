import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Career } from '../career/career.entity';
import { Modulo } from '../module/module.entity';
import { University } from '../university/university.entity';

@Entity()
export class Faculty {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
  @Column({ type: 'varchar', nullable: true }) abbreviation: string;
  @Column({ type: 'varchar' }) code: string;

  @ManyToOne(() => University, (university) => university.faculties)
  university: University;

  @OneToMany(() => Modulo, (module) => module.faculty)
  modules: Modulo[];

  @OneToMany(() => Career, (career) => career.faculty)
  careers: Career[];
}
