import { Material } from './material.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class MaterialService extends TypeOrmCrudService<Material> {
  constructor(@InjectRepository(Material) repo) {
    super(repo);
  }
}
