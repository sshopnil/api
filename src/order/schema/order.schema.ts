import mongoose from "mongoose";

export const OrderSchema = new mongoose.Schema({
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
        type: Array<number>,
        required: true
    }
});

