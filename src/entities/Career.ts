import { Column, Entity, Index, OneToMany } from 'typeorm';
import { SubjectCareer } from './SubjectCareer';

@Index('code', ['code'], { unique: true })
@Entity('Career', { schema: 'ficct' })
export class Career {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('date', { name: 'creationDate' })
  creationDate: string;

  @Column('varchar', { name: 'code', unique: true, length: 10 })
  code: string;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('tinyint', { name: 'duration' })
  duration: number;

  @Column('varchar', { name: 'educationLevel', length: 100 })
  educationLevel: string;

  @Column('varchar', { name: 'academicTitle', length: 100 })
  academicTitle: string;

  @Column('varchar', { name: 'midTitle', length: 100 })
  midTitle: string;

  @Column('varchar', { name: 'nationalTitle', length: 100 })
  nationalTitle: string;

  @Column('varchar', { name: 'fax', length: 20 })
  fax: string;

  @Column('varchar', { name: 'email', length: 100 })
  email: string;

  @Column('varchar', { name: 'blog', nullable: true, length: 255 })
  blog?: string;

  @Column('varchar', { name: 'location', nullable: true, length: 255 })
  location?: string;

  @Column('varchar', { name: 'web', nullable: true, length: 255 })
  web?: string;

  @Column('int', { name: 'Placeid', nullable: true })
  placeid?: number;

  @OneToMany(() => SubjectCareer, (subjectCareer) => subjectCareer.career)
  subjectCareers: SubjectCareer[];
}
