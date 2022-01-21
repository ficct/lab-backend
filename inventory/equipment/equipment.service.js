"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const Equipment_1 = require("../../entities/Equipment");
let EquipmentService = class EquipmentService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(repo) {
        super(repo);
    }
    getManyWithQuery(query) {
        const { limit, page, placeId, search } = query;
        const queryBuilder = this.repo
            .createQueryBuilder('e')
            .leftJoinAndSelect('e.unit', 'u')
            .leftJoinAndSelect('e.equipmentType', 't')
            .leftJoinAndSelect('e.equipmentBrand', 'b');
        search &&
            queryBuilder
                .where(`u.name like %${search}%`)
                .orWhere(`t.name like %${search}%`)
                .orWhere(`b.name like %${search}%`)
                .orWhere(`e.code like %${search}%`)
                .orWhere(`e.state like %${search}%`)
                .orWhere(`e.description like %${search}%`)
                .orWhere(`e.observations like %${search}%`);
        placeId && queryBuilder.andWhere(`e.placeid = ${placeId}`);
        return queryBuilder
            .skip(limit * page)
            .take(limit)
            .getMany();
    }
    getOne(req) {
        const [paramId] = req.parsed.paramsFilter;
        return this.repo.findOne(paramId.value, {
            relations: [
                'unit',
                'equipmentType',
                'equipmentBrand',
                'place',
                'movements',
                'movements.user',
                'movements.user.role',
                'movements.reason',
                'movements.placeTo',
                'movements.placeFrom',
            ],
        });
    }
};
EquipmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Equipment_1.Equipment)),
    __metadata("design:paramtypes", [Object])
], EquipmentService);
exports.EquipmentService = EquipmentService;
//# sourceMappingURL=equipment.service.js.map