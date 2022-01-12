import {
  Index,
  Entity,
  Column,
  JoinTable,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Career } from './Career';
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

  @ManyToMany(() => Subject, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinTable({
    name: 'Requirement',
    joinColumn: { name: 'subjectReqId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'subjectPreqId', referencedColumnName: 'id' },
  })
  requires: Subject[];

  @ManyToMany(() => Subject, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinTable({
    name: 'Requirement',
    joinColumn: { name: 'subjectPreqId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'subjectReqId', referencedColumnName: 'id' },
  })
  isRequiredBy: Subject[];

  @ManyToMany(() => Career, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinTable({
    name: 'Subject_Career',
    joinColumn: { name: 'Subjectid', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'Careerid', referencedColumnName: 'id' },
  })
  careers: Career[];

  @OneToMany(() => SubjectCareer, (subjectCareer) => subjectCareer.subject)
  subjectCareers: SubjectCareer;
}
