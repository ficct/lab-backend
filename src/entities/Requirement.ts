import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from './Subject';

@Index('FKRequiremen264442', ['subjectPreqId'], {})
@Index('FKRequiremen227209', ['subjectReqId'], {})
@Entity('Requirement', { schema: 'ficct' })
export class Requirement {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'subjectReqId' })
  subjectReqId: number;

  @Column('int', { name: 'subjectPreqId' })
  subjectPreqId: number;

  @Column('int', { name: 'Careerid' })
  careerid: number;

  @ManyToOne(() => Subject, (subject) => subject.requirements, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'subjectReqId', referencedColumnName: 'id' }])
  subjectReq: Subject;

  @ManyToOne(() => Subject, (subject) => subject.requirements2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'subjectPreqId', referencedColumnName: 'id' }])
  subjectPreq: Subject;
}
