import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Subject } from './Subject';

@Index('FKRequiremen227209', ['subjectReqId'], {})
@Index('FKRequiremen264442', ['subjectPreqId'], {})
@Entity('Requirement', { schema: 'ficct' })
export class Requirement {
  @Column('int', { primary: true, name: 'id' })
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
