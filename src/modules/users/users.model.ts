

import mongoose from 'mongoose';

import IUser from "./users.interface";



const UserSchema= new mongoose.Schema({
    fistName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        index:true,
        require:true
    },

    password:{
        type:String,
        require:true
    },
    avatar:{
        type:String,
    
    },
    date:{
        type:Date,
        default:Date.now
    },
});

export default mongoose.model<IUser & mongoose.Document>('user',UserSchema);


