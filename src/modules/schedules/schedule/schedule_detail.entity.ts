import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ScheduleDetail {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) day: string;
  @Column({ type: 'time without time zone' }) check_in_time: Date;
  @Column({ type: 'time without time zone' }) check_in_out: Date;
  @Column({ type: 'bool' }) high_drop: boolean; // Alta-Baja
}
