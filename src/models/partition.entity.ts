import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Partition {
  @PrimaryGeneratedColumn() id: number;
}
