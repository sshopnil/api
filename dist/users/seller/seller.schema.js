"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SellerSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    shop_name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    house: {
        type: String,
        required: true,
    },
    thana: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    category: {
        type: (Array),
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});
//# sourceMappingURL=seller.schema.js.map