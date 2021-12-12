import { Career } from 'src/modules/inventory/career/career.entity';
import { University } from 'src/modules/inventory/university/university.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Modulo } from '../module/module.entity';
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
