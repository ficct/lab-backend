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
exports.PlaceType = void 0;
const typeorm_1 = require("typeorm");
const Place_1 = require("./Place");
let PlaceType = class PlaceType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], PlaceType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', unique: true, length: 50 }),
    __metadata("design:type", String)
], PlaceType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Place_1.Place, (place) => place.type),
    __metadata("design:type", Array)
], PlaceType.prototype, "places", void 0);
PlaceType = __decorate([
    (0, typeorm_1.Index)('name', ['name'], { unique: true }),
    (0, typeorm_1.Entity)('PlaceType', { schema: 'ficct' })
], PlaceType);
exports.PlaceType = PlaceType;
//# sourceMappingURL=PlaceType.js.map