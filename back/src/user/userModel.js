import { UserModel } from './userSchema.js';

class   User {
    //추후 해당하는 기능 추가 예정

    //1.계정 생성
    static async create({newUser}){
        const createdNewUser = await UserModel.create(newUser);
        return createdNewUser
    }

    static async findByEmail({email}){
        const findUser = await UserModel.findOne({email : email})
        console.log("findUser 결과",findUser)
        return findUser
    }
}

export  {User}
