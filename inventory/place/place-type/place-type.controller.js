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
exports.PlaceTypeController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const PlaceType_1 = require("../../../entities/PlaceType");
const place_type_service_1 = require("./place-type.service");
let PlaceTypeController = class PlaceTypeController {
    constructor(service) {
        this.service = service;
    }
};
PlaceTypeController = __decorate([
    (0, crud_1.Crud)({
        model: { type: PlaceType_1.PlaceType },
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
    (0, swagger_1.ApiTags)('place-type'),
    (0, common_1.Controller)('place-types'),
    __metadata("design:paramtypes", [place_type_service_1.PlaceTypeService])
], PlaceTypeController);
exports.PlaceTypeController = PlaceTypeController;
//# sourceMappingURL=place-type.controller.js.map