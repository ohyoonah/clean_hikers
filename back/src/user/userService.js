import { User } from "../mongoDB/index.js"
import bcrypt from 'bcrypt'
import {v4 as uuidv4} from 'uuid'
import jwt from 'jsonwebtoken'

class userService{
    static async addUser({ email,nickname,password}){
        const user = await User.findByEmail({email})
        console.log(user)
        if(user) {
            const errorMessage = "이 이메일은 현재 사용중입니다"
            return {errorMessage}
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const id = uuidv4();


        const newUser = {id, email, nickname, password :hashedPassword }

        const createdNewUser = await User.create({newUser})
        return createdNewUser
    }


    static async login({email,password}){
        const userEmail = await User.findByEmail({email})
        if(!userEmail){
            const errorMessage = "해당 유저는 존재하지 않습니다"
            return errorMessage
        }
        const correctPassword = userEmail.password
        const isPasswordRight = bcrypt.compare(password, correctPassword)
        if(!isPasswordRight){
            const errorMessage = "비밀번호가 일치하지 않습니다"
            return errorMessage
        }
        const secretKey = process.env.JWT_SECRET_KEY 
        console.log(secretKey)
        return 'hi'
    }

}

export  {userService}