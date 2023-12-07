"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.default.Schema({
    prod_id: {
        type: Number
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: false
    },
    user_email: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    }
});
//# sourceMappingURL=product.schema.js.map