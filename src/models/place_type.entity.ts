import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class PlaceType {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}
