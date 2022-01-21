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
exports.EquipmentBrand = void 0;
const typeorm_1 = require("typeorm");
const Equipment_1 = require("./Equipment");
let EquipmentBrand = class EquipmentBrand {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], EquipmentBrand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', unique: true, length: 50 }),
    __metadata("design:type", String)
], EquipmentBrand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Equipment_1.Equipment, (equipment) => equipment.equipmentBrand),
    __metadata("design:type", Array)
], EquipmentBrand.prototype, "equipment", void 0);
EquipmentBrand = __decorate([
    (0, typeorm_1.Index)('name', ['name'], { unique: true }),
    (0, typeorm_1.Entity)('EquipmentBrand', { schema: 'ficct' })
], EquipmentBrand);
exports.EquipmentBrand = EquipmentBrand;
//# sourceMappingURL=EquipmentBrand.js.map