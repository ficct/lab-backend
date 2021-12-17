import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { Place } from './place.entity';
@Entity()
export class PlaceType {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar' }) name: string;
}
