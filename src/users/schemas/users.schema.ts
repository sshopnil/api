import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: false,
    },
    user_role:{
        type: String,
        required: false,
    }
});