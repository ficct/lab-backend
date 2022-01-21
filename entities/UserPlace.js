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
exports.UserPlace = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Place_1 = require("./Place");
let UserPlace = class UserPlace {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Userid' }),
    __metadata("design:type", Number)
], UserPlace.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Placeid' }),
    __metadata("design:type", Number)
], UserPlace.prototype, "placeid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'startTime' }),
    __metadata("design:type", Number)
], UserPlace.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'endTime' }),
    __metadata("design:type", Number)
], UserPlace.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'startDate' }),
    __metadata("design:type", String)
], UserPlace.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'endDate' }),
    __metadata("design:type", String)
], UserPlace.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.userPlaces, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Userid', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], UserPlace.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)([{ name: 'Placeid', referencedColumnName: 'id' }]),
    __metadata("design:type", Place_1.Place)
], UserPlace.prototype, "place", void 0);
UserPlace = __decorate([
    (0, typeorm_1.Index)('FKUser_Place372007', ['placeid'], {}),
    (0, typeorm_1.Entity)('User_Place', { schema: 'ficct' })
], UserPlace);
exports.UserPlace = UserPlace;
//# sourceMappingURL=UserPlace.js.map