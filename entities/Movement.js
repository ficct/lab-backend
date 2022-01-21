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
exports.Movement = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Place_1 = require("./Place");
const Equipment_1 = require("./Equipment");
const MovementReason_1 = require("./MovementReason");
let Movement = class Movement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Movement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Reasonid', select: false }),
    __metadata("design:type", Number)
], Movement.prototype, "reasonid", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'description', nullable: true }),
    __metadata("design:type", String)
], Movement.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Equipmentid', select: false }),
    __metadata("design:type", Number)
], Movement.prototype, "equipmentid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'placeFrom_id', nullable: true, select: false }),
    __metadata("design:type", Number)
], Movement.prototype, "placeFromId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'placeTo_id', nullable: true, select: false }),
    __metadata("design:type", Number)
], Movement.prototype, "placeToId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Userid', nullable: true, select: false }),
    __metadata("design:type", Number)
], Movement.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MovementReason_1.MovementReason, (movementReason) => movementReason.movements, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinColumn)({ name: 'Reasonid', referencedColumnName: 'id' }),
    __metadata("design:type", MovementReason_1.MovementReason)
], Movement.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Place_1.Place, (place) => place.movements, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'placeTo_id', referencedColumnName: 'id' }),
    __metadata("design:type", Place_1.Place)
], Movement.prototype, "placeTo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Equipment_1.Equipment, (equipment) => equipment.movements, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Equipmentid', referencedColumnName: 'id' }]),
    __metadata("design:type", Equipment_1.Equipment)
], Movement.prototype, "equipment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Place_1.Place, (place) => place.movements2, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'placeFrom_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Place_1.Place)
], Movement.prototype, "placeFrom", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.movements),
    (0, typeorm_1.JoinColumn)({ name: 'Userid', referencedColumnName: 'id' }),
    __metadata("design:type", User_1.User)
], Movement.prototype, "user", void 0);
Movement = __decorate([
    (0, typeorm_1.Index)('FKMovement111260', ['reasonid'], {}),
    (0, typeorm_1.Index)('FKMovement114181', ['placeToId'], {}),
    (0, typeorm_1.Index)('FKMovement513408', ['placeFromId'], {}),
    (0, typeorm_1.Index)('FKMovement329029', ['equipmentid'], {}),
    (0, typeorm_1.Entity)('Movement', { schema: 'ficct' })
], Movement);
exports.Movement = Movement;
//# sourceMappingURL=Movement.js.map