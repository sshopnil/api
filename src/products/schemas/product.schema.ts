import { AutoIncrementSimple } from "@typegoose/auto-increment";
import mongoose, { Model } from "mongoose";

export const ProductSchema = new mongoose.Schema({
    prod_id:{
        type: Number
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    qty:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: false
    },
    user_email:{
        type: String,
        required: true
    }
});