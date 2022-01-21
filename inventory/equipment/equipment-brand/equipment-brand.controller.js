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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentBrandController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const EquipmentBrand_1 = require("../../../entities/EquipmentBrand");
const equipment_brand_service_1 = require("./equipment-brand.service");
let EquipmentBrandController = class EquipmentBrandController {
    constructor(service) {
        this.service = service;
    }
};
EquipmentBrandController = __decorate([
    (0, crud_1.Crud)({
        model: { type: EquipmentBrand_1.EquipmentBrand },
        routes: {
            only: [
                'getOneBase',
                'getManyBase',
                'createOneBase',
                'updateOneBase',
                'deleteOneBase',
            ],
        },
    }),
    (0, swagger_1.ApiTags)('equipment-brands'),
    (0, common_1.Controller)('equipment-brands'),
    __metadata("design:paramtypes", [equipment_brand_service_1.EquipmentBrandService])
], EquipmentBrandController);
exports.EquipmentBrandController = EquipmentBrandController;
//# sourceMappingURL=equipment-brand.controller.js.map