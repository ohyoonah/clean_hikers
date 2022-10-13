import { User } from "../mongoDB/index.js"
import bcrypt from 'bcrypt'
import {v4 as uuidv4} from 'uuid'
import jwt from 'jsonwebtoken'

class userService{
    static async addUser({ email,nickname,password}){
        const user = await User.findByEmail({email})
        console.log(user)
        if(user) {
            throw new Error('')
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const id = uuidv4();


        const newUser = {id, email, nickname, password :hashedPassword }

        const createdNewUser = await User.create({newUser})
        return createdNewUser
    }


    static async login({email,password}){
        try{const userEmail = await User.findByEmail({email})
        console.log(userEmail)
        console.log(!null)
        if(!userEmail){
            throw new Error('해당 유저는 존재하지 않습니다')
        }
        const correctPassword = userEmail.password
        const isPasswordRight = await bcrypt.compare(password, correctPassword)
        console.log(isPasswordRight)
        if(!isPasswordRight){
            throw new Error('비밀번호가 틀렸습니다')
        }
        //따로 선언을 안했는데 .env파일이 들어가는 이유
        
        const secretKey = process.env.JWT_SECRET_KEY 
        
        const result = jwt.sign({
            id : userEmail.id
        },secretKey,{
            expiresIn: '30m'
        })

        return result
    }
        catch(error){
            //error가 발생할 부분은 없는거 같지만 에러는 만약을 위해 하는 거니까 설치
            //
            throw error
        }
    }

    static async findCurrentUserData(userID){
        try{
            const currentUser = await User.findByID(userID)
            if(!currentUser){
                throw new Error('해당 유저는 존재하지 않습니다2')
            }
            return currentUser
        }catch(error){
            throw error
        }
    }

    static async findByEmail(userMail){
        try{
            const checkUser = await User.findByEmail({email:userMail})
            if(!checkUser){
                //null일 경우는 여기서 걸러버림
                //null = 일치하는 유저가 없음
                return true
            }
            else{
                return false
            }
        }
        catch(error){
            throw error
        }
    }

    static async changeUserNickname(userID, changeNickname){
        try{
            const currentUser = await User.findByIDandChangeNickname(userID, changeNickname)
            if(!currentUser){
                throw new Error('해당 유저는 존재하지 않습니다-nickname')
            }
            return currentUser
        }
        catch(error){
            throw error
        }
    }

    static async changeUserPassword(userID, changePassword){
        try{
            const encryptPassword = await bcrypt.hash(changePassword, 10)
            const currentUser = await User.findByIDandChangePassword(userID, encryptPassword)
            if(!currentUser){
                throw new Error('해당 유저는 존재하지 않습니다-password')
            }
            return currentUser
        }
        catch(error){
            throw error
        }
    }


    // static async createImage(userID, imageString){
    //     try{
    //         const create
    //     }
    //     catch(error){
    //         throw error
    //     }
    // }
}

export  {userService}