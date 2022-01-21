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
exports.UserTask = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = require("./Task");
const User_1 = require("./User");
let UserTask = class UserTask {
};
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Userid' }),
    __metadata("design:type", Number)
], UserTask.prototype, "userid", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'Taskid' }),
    __metadata("design:type", Number)
], UserTask.prototype, "taskid", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'startDate' }),
    __metadata("design:type", String)
], UserTask.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'endDate' }),
    __metadata("design:type", String)
], UserTask.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Task_1.Task, (task) => task.userTasks, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Taskid', referencedColumnName: 'id' }]),
    __metadata("design:type", Task_1.Task)
], UserTask.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.userTasks, {
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'Userid', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], UserTask.prototype, "user", void 0);
UserTask = __decorate([
    (0, typeorm_1.Index)('FKUser_Task132829', ['taskid'], {}),
    (0, typeorm_1.Entity)('User_Task', { schema: 'ficct' })
], UserTask);
exports.UserTask = UserTask;
//# sourceMappingURL=UserTask.js.map