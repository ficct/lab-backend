import {
  Index,
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('FKJobTitle642966', ['supJobTitleId'], {})
@Entity('JobTitle', { schema: 'ficct' })
export class JobTitle {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 100 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('int', { name: 'supJobTitleId', nullable: true, select: false })
  supJobTitleId?: number;

  @ManyToOne(() => JobTitle, (jobTitle) => jobTitle.subJobs, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'supJobTitleId', referencedColumnName: 'id' })
  supJob: JobTitle;

  @OneToMany(() => JobTitle, (jobTitle) => jobTitle.supJob)
  @JoinColumn({ name: 'supJobTitleId', referencedColumnName: 'id' })
  subJobs: JobTitle[];
}
