import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Image {
  @PrimaryGeneratedColumn() id: number;
}
