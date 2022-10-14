import { connect } from 'mongoose'
import {User} from '../user/userModel.js'



import * as dotenv from "dotenv";
dotenv.config();
const {MONGO_URI} = process.env

connect(
    MONGO_URI
)
.then(()=> console.log('MongoDB와 연결에 성공했습니다'))
.catch(error => console.error(error))

export {
    User
}