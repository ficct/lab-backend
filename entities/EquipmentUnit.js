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
exports.EquipmentUnit = void 0;
const typeorm_1 = require("typeorm");
const Equipment_1 = require("./Equipment");
let EquipmentUnit = class EquipmentUnit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], EquipmentUnit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', unique: true, length: 10 }),
    __metadata("design:type", String)
], EquipmentUnit.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Equipment_1.Equipment, (equipment) => equipment.unit),
    __metadata("design:type", Array)
], EquipmentUnit.prototype, "equipment", void 0);
EquipmentUnit = __decorate([
    (0, typeorm_1.Index)('name', ['name'], { unique: true }),
    (0, typeorm_1.Entity)('EquipmentUnit', { schema: 'ficct' })
], EquipmentUnit);
exports.EquipmentUnit = EquipmentUnit;
//# sourceMappingURL=EquipmentUnit.js.map