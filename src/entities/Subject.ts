import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Requirement } from './Requirement';
import { SubjectCareer } from './SubjectCareer';

@Index('code', ['code'], { unique: true })
@Entity('Subject', { schema: 'ficct' })
export class Subject {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code', unique: true, length: 10 })
  code: string;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('int', { name: 'HT' })
  ht: number;

  @Column('int', { name: 'HP' })
  hp: number;

  @Column('int', { name: 'HS' })
  hs: number;

  @Column('int', { name: 'CR' })
  cr: number;

  @OneToMany(() => Requirement, (requirement) => requirement.subjectReq)
  requirements: Requirement[];

  @OneToMany(() => Requirement, (requirement) => requirement.subjectPreq)
  requirements2: Requirement[];

  @OneToMany(() => SubjectCareer, (subjectCareer) => subjectCareer.subject)
  subjectCareers: SubjectCareer[];
}
