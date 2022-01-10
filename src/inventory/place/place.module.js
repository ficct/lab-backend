"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlaceModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var Place_1 = require("entities/Place");
var PlaceType_1 = require("entities/PlaceType");
var place_service_1 = require("./place.service");
var place_type_service_1 = require("./place-type/place-type.service");
var place_controller_1 = require("./place.controller");
var place_type_controller_1 = require("./place-type/place-type.controller");
var PlaceModule = /** @class */ (function () {
    function PlaceModule() {
    }
    PlaceModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([Place_1.Place, PlaceType_1.PlaceType])],
            controllers: [place_controller_1.PlaceController, place_type_controller_1.PlaceTypeController],
            providers: [place_service_1.PlaceService, place_type_service_1.PlaceTypeService]
        })
    ], PlaceModule);
    return PlaceModule;
}());
exports.PlaceModule = PlaceModule;
