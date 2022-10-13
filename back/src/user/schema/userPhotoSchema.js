import {Schema, model} from 'mongoose';


const PhotoSchema = new Schema(
    {
        userID : {
            type : String,
            required : true,
        },
        id : {
            type : String,
            required : true
        },
        image:{
            type:String,
            requrired : true,
        }
    },
    {
        timestamps : true
    }
)

const PhotoModel = model("Photo", PhotoSchema)

export {PhotoModel}