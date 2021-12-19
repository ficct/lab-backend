import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Kardex {
  @PrimaryGeneratedColumn() id: number;
}
