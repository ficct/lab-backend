import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Equipment {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) code: string;
  @Column({ type: 'varchar' }) description: string;
  @Column({ type: 'bool' }) is_available: boolean;
  @Column({ type: 'bool' }) loanable: string;
  @Column({ type: 'bool' }) high_drop: boolean;
}
