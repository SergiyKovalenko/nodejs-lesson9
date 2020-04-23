"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BooksSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    isAdmin: Boolean,
    verified: Boolean
});
//# sourceMappingURL=books.schema.js.map