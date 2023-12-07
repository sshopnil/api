"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.OrderSchema = new mongoose_1.default.Schema({
    id: {
        type: Number
    },
    del_date: {
        type: String
    },
    status: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    delDate_start: {
        type: String,
        required: true
    },
    delDate_end: {
        type: String,
        required: true
    },
    buyer_email: {
        type: String,
        required: true
    },
    buyer_address: {
        type: String,
        required: true
    },
    product_ids: {
        type: (Array),
        required: true
    }
});
//# sourceMappingURL=order.schema.js.map