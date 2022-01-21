import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Equipment } from 'entities/Equipment';
interface QueryEquipmentOptions {
    page: number;
    limit: number;
    placeId?: number;
    search?: string;
}
export declare class EquipmentService extends TypeOrmCrudService<Equipment> {
    constructor(repo: any);
    getManyWithQuery(query: QueryEquipmentOptions): Promise<Equipment[]>;
    getOne(req: CrudRequest): Promise<Equipment>;
}
export {};
