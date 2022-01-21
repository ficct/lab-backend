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
exports.PlacePlace = void 0;
const typeorm_1 = require("typeorm");
let PlacePlace = class PlacePlace {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'placeParent_id' }),
    __metadata("design:type", Number)
], PlacePlace.prototype, "placeParentId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'placeChild_id' }),
    __metadata("design:type", Number)
], PlacePlace.prototype, "placeChildId", void 0);
PlacePlace = __decorate([
    (0, typeorm_1.Index)('FKPlace_Plac26955', ['placeChildId'], {}),
    (0, typeorm_1.Entity)('Place_Place', { schema: 'ficct' })
], PlacePlace);
exports.PlacePlace = PlacePlace;
//# sourceMappingURL=PlacePlace.js.map