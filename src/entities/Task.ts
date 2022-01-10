import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserTask } from './UserTask';

@Entity('Task', { schema: 'ficct' })
export class Task {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('date', { name: 'deadLine' })
  deadLine: string;

  @Column('bit', { name: 'status', default: () => "'b'0''" })
  status: boolean;

  @Column('int', { name: 'Placeid', nullable: true })
  placeid: number | null;

  @Column('varchar', { name: 'photoUrl', nullable: true, length: 255 })
  photoUrl: string | null;

  @OneToMany(() => UserTask, (userTask) => userTask.task)
  userTasks: UserTask[];
}
