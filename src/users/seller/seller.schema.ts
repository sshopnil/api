import mongoose from "mongoose";

export const SellerSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    shop_name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true
    },
    house:{
        type: String,
        required: true,
    },
    thana:{
        type: String,
        required: true,
    },
    division:{
        type: String,
        required: true,
    },
    category:{
        type: Array<String>,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
});