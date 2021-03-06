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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_books_dto_1 = require("./create-books.dto");
const books_service_1 = require("./books.service");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async findAll() {
        return this.bookService.findAll();
    }
    async createBook(CreateBookDto) {
        return this.bookService.createBook(CreateBookDto);
    }
};
__decorate([
    common_1.Get('/books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findAll", null);
__decorate([
    common_1.Post('/api/books'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_books_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
BookController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=books.controller.js.map