import { Schema, model } from "mongoose";

const MainSchema = new Schema({
    id: {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    trash : {
        type : String,
        required : true
    },
},
{
    timestamps: true
}
)


const MainModel = model("Main", MainSchema)

export {MainModel}