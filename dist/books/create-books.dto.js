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
const class_validator_1 = require("class-validator");
class CreateBookPublishedDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookPublishedDto.prototype, "publisher", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateBookPublishedDto.prototype, "year", void 0);
exports.CreateBookPublishedDto = CreateBookPublishedDto;
class CreateBookDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "blogpost", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "author", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsObject(),
    __metadata("design:type", CreateBookPublishedDto)
], CreateBookDto.prototype, "published", void 0);
exports.CreateBookDto = CreateBookDto;
//# sourceMappingURL=create-books.dto.js.map