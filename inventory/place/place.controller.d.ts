import { CrudController } from '@nestjsx/crud';
import { Place } from 'entities/Place';
import { PlaceService } from './place.service';
export declare class PlaceController implements CrudController<Place> {
    service: PlaceService;
    constructor(service: PlaceService);
}
