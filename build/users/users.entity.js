"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn()
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "isAdmin", void 0);
__decorate([
    typeorm_1.Column()
], UserEntity.prototype, "verified", void 0);
UserEntity = __decorate([
    typeorm_1.Entity({ name: 'users' })
], UserEntity);
exports.UserEntity = UserEntity;
