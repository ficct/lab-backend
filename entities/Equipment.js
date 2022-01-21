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
exports.Equipment = void 0;
const typeorm_1 = require("typeorm");
const Place_1 = require("./Place");
const Movement_1 = require("./Movement");
const EquipmentUnit_1 = require("./EquipmentUnit");
const EquipmentType_1 = require("./EquipmentType");
const EquipmentBrand_1 = require("./EquipmentBrand");
let Equipment = class Equipment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Equipment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'description' }),
    __metadata("design:type", String)
], Equipment.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', unique: true, length: 100 }),
    __metadata("design:type", String)
], Equipment.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photoUrl', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Equipment.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'state', length: 50 }),
    __metadata("design:type", String)
], Equipment.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'observations', nullable: true }),
    __metadata("design:type", String)
], Equipment.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Unitid', select: false }),
    __metadata("design:type", Number)
], Equipment.prototype, "unitid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Placeid', nullable: true, select: false }),
    __metadata("design:type", Number)
], Equipment.prototype, "placeid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'EquipmentBrandid', select: false }),
    __metadata("design:type", Number)
], Equipment.prototype, "equipmentBrandid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'EquipmentTypeid', select: false }),
    __metadata("design:type", Number)
], Equipment.prototype, "equipmentTypeid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photo_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Equipment.prototype, "photoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EquipmentType_1.EquipmentType, (type) => type.equipment, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'EquipmentTypeid', referencedColumnName: 'id' }),
    __metadata("design:type", EquipmentType_1.EquipmentType)
], Equipment.prototype, "equipmentType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EquipmentUnit_1.EquipmentUnit, (unit) => unit.equipment, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'Unitid', referencedColumnName: 'id' }),
    __metadata("design:type", EquipmentUnit_1.EquipmentUnit)
], Equipment.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EquipmentBrand_1.EquipmentBrand, (brand) => brand.equipment, {
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'EquipmentBrandid', referencedColumnName: 'id' }),
    __metadata("design:type", EquipmentBrand_1.EquipmentBrand)
], Equipment.prototype, "equipmentBrand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Movement_1.Movement, (movement) => movement.equipment),
    __metadata("design:type", Array)
], Equipment.prototype, "movements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Place_1.Place, (place) => place.equipments),
    (0, typeorm_1.JoinColumn)({ name: 'Placeid', referencedColumnName: 'id' }),
    __metadata("design:type", Place_1.Place)
], Equipment.prototype, "place", void 0);
Equipment = __decorate([
    (0, typeorm_1.Index)('code', ['code'], { unique: true }),
    (0, typeorm_1.Index)('FKEquipment753314', ['equipmentTypeid'], {}),
    (0, typeorm_1.Index)('FKEquipment950424', ['equipmentBrandid'], {}),
    (0, typeorm_1.Index)('FKEquipment921418', ['unitid'], {}),
    (0, typeorm_1.Entity)('Equipment', { schema: 'ficct' })
], Equipment);
exports.Equipment = Equipment;
//# sourceMappingURL=Equipment.js.map