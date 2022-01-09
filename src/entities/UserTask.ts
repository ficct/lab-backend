import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Task } from './Task';
import { User } from './User';

@Index('FKUser_Task132829', ['taskid'], {})
@Entity('User_Task', { schema: 'ficct' })
export class UserTask {
  @Column('int', { primary: true, name: 'Userid' })
  userid: number;

  @Column('int', { primary: true, name: 'Taskid' })
  taskid: number;

  @Column('date', { name: 'startDate' })
  startDate: string;

  @Column('date', { name: 'endDate' })
  endDate: string;

  @ManyToOne(() => Task, (task) => task.userTasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Taskid', referencedColumnName: 'id' }])
  task: Task;

  @ManyToOne(() => User, (user) => user.userTasks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'Userid', referencedColumnName: 'id' }])
  user: User;
}
