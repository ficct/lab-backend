import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('FKJobTitle642966', ['supJobTitleId'], {})
@Entity('JobTitle', { schema: 'ficct' })
export class JobTitle {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('int', { name: 'supJobTitleId', nullable: true })
  supJobTitleId: number | null;

  @ManyToOne(() => JobTitle, (jobTitle) => jobTitle.jobTitles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'supJobTitleId', referencedColumnName: 'id' }])
  supJobTitle: JobTitle;

  @OneToMany(() => JobTitle, (jobTitle) => jobTitle.supJobTitle)
  jobTitles: JobTitle[];
}
