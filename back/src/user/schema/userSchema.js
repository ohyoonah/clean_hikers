import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "설명이 아직 없습니다. 추가해 주세요.",
    },
    deleted : {
      type : Boolean,
      required : true,
      default : false
    },
    defaultImage:{
      type : Boolean,
      required : true,
      default : false
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export  {UserModel}
