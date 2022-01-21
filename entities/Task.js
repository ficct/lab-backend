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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const UserTask_1 = require("./UserTask");
let Task = class Task {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 50 }),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'deadLine' }),
    __metadata("design:type", String)
], Task.prototype, "deadLine", void 0);
__decorate([
    (0, typeorm_1.Column)('bit', { name: 'status', default: () => "'b'0''" }),
    __metadata("design:type", Boolean)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'Placeid', nullable: true }),
    __metadata("design:type", Number)
], Task.prototype, "placeid", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'photoUrl', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Task.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserTask_1.UserTask, (userTask) => userTask.task),
    __metadata("design:type", Array)
], Task.prototype, "userTasks", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)('Task', { schema: 'ficct' })
], Task);
exports.Task = Task;
//# sourceMappingURL=Task.js.map