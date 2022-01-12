import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Subject } from './Subject';

@Index('FKSubject_Ca801092', ['careerid'], {})
@Entity('Subject_Career', { schema: 'ficct' })
export class SubjectCareer {
  @Column('int', { primary: true, name: 'Subjectid' })
  subjectid: number;

  @Column('int', { primary: true, name: 'Careerid' })
  careerid: number;

  @Column('int', { name: 'semester' })
  semester: number;

  @ManyToOne(() => Subject, (subject) => subject.subjectCareers, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'Subjectid', referencedColumnName: 'id' })
  subject: Subject;
}
