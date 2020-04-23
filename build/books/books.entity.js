"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let BookEntity = class BookEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn()
], BookEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column()
], BookEntity.prototype, "blogpost", void 0);
__decorate([
    typeorm_1.Column()
], BookEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column()
], BookEntity.prototype, "author", void 0);
__decorate([
    typeorm_1.Column()
], BookEntity.prototype, "published", void 0);
BookEntity = __decorate([
    typeorm_1.Entity({ name: 'books' })
], BookEntity);
exports.BookEntity = BookEntity;
