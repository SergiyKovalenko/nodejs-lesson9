"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose.Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String
});
//# sourceMappingURL=users.schema.js.map