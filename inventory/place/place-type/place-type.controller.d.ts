import { CrudController } from '@nestjsx/crud';
import { PlaceType } from 'entities/PlaceType';
import { PlaceTypeService } from './place-type.service';
export declare class PlaceTypeController implements CrudController<PlaceType> {
    service: PlaceTypeService;
    constructor(service: PlaceTypeService);
}
