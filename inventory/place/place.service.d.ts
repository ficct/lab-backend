import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CrudRequest, GetManyDefaultResponse } from '@nestjsx/crud';
import { Place } from 'entities/Place';
import { PlaceTypeService } from './place-type/place-type.service';
export declare class PlaceService extends TypeOrmCrudService<Place> {
    private type;
    constructor(repo: any, type: PlaceTypeService);
    getMany(req: CrudRequest): Promise<Place[] | GetManyDefaultResponse<Place>>;
    getOne(req: CrudRequest): Promise<Place>;
}
