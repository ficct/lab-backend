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
var Place_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const typeorm_1 = require("typeorm");
const Equipment_1 = require("./Equipment");
const Movement_1 = require("./Movement");
const PlaceType_1 = require("./PlaceType");
let Place = Place_1 = class Place {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Place.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', unique: true, length: 20 }),
    __metadata("design:type", String)
], Place.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Place.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Typeid', select: false }),
    __metadata("design:type", Number)
], Place.prototype, "typeid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photoUrl', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Place.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Place.prototype, "photoId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Movement_1.Movement, (movement) => movement.placeTo),
    __metadata("design:type", Array)
], Place.prototype, "movements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Movement_1.Movement, (movement) => movement.placeFrom),
    __metadata("design:type", Array)
], Place.prototype, "movements2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PlaceType_1.PlaceType, (placeType) => placeType.places, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Typeid', referencedColumnName: 'id' }]),
    __metadata("design:type", PlaceType_1.PlaceType)
], Place.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Place_1, { onUpdate: 'NO ACTION', onDelete: 'NO ACTION' }),
    (0, typeorm_1.JoinTable)({
        name: 'Place_Place',
        joinColumn: { name: 'placeParent_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'placeChild_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Place.prototype, "places", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Equipment_1.Equipment, (equipment) => equipment.place),
    __metadata("design:type", Array)
], Place.prototype, "equipments", void 0);
Place = Place_1 = __decorate([
    (0, typeorm_1.Index)('code', ['code'], { unique: true }),
    (0, typeorm_1.Index)('FKPlace446570', ['typeid'], {}),
    (0, typeorm_1.Entity)('Place', { schema: 'ficct' })
], Place);
exports.Place = Place;
//# sourceMappingURL=Place.js.map