import { Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class OperatingSystem {
  @PrimaryGeneratedColumn() id: number;
}
