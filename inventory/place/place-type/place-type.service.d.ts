import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PlaceType } from 'entities/PlaceType';
export declare class PlaceTypeService extends TypeOrmCrudService<PlaceType> {
    constructor(repo: any);
}
