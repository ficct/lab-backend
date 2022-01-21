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
exports.EquipmentController = void 0;
const crud_1 = require("@nestjsx/crud");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const Equipment_1 = require("../../entities/Equipment");
const equipment_service_1 = require("./equipment.service");
let EquipmentController = class EquipmentController {
    constructor(service) {
        this.service = service;
    }
    async findAll(query, res) {
        let { placeId } = query;
        const { limit = 10, page = 0, search = null } = query;
        placeId = Number.parseInt(placeId);
        try {
            return res.status(common_1.HttpStatus.ACCEPTED).send(await this.service.getManyWithQuery({
                page,
                limit,
                search,
                placeId: isNaN(placeId) ? null : placeId,
            }));
        }
        catch (err) {
            console.error(err);
        }
        return res.status(common_1.HttpStatus.NO_CONTENT).send([]);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EquipmentController.prototype, "findAll", null);
EquipmentController = __decorate([
    (0, crud_1.Crud)({
        model: { type: Equipment_1.Equipment },
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
    (0, swagger_1.ApiTags)('equipments'),
    (0, common_1.Controller)('equipments'),
    __metadata("design:paramtypes", [equipment_service_1.EquipmentService])
], EquipmentController);
exports.EquipmentController = EquipmentController;
//# sourceMappingURL=equipment.controller.js.map