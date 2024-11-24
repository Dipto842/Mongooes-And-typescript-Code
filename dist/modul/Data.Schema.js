"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datamodel = void 0;
const mongoose_1 = require("mongoose");
const dataSchema = new mongoose_1.Schema({
    id: String,
    title: String,
    brand: String,
    price: Number,
    category: String,
    type: String,
    description: String,
    quantity: Number,
    inStock: Boolean,
}, {
    timestamps: true,
    versionKey: false,
});
exports.Datamodel = (0, mongoose_1.model)('data', dataSchema);
