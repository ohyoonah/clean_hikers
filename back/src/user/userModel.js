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

    static async findByIDandChangeNickname(userID, changingData){
        const filter = {
            id : userID
        }
        const update = {
            nickname : changingData
        }
        const changedUser = await UserModel.findOneAndUpdate(filter, update, {new : true})
        console.log('Nickname changed : ',changedUser.nickname)
        return changedUser
    }

    static async findByIDandChangePassword(userID, changingData){
        const filter = {
            id : userID
        }
        const update = {
            password : changingData
        }

        //공식문서에선 object를 반환해주는게 아니라 document를 반환해주는 것이기 때문에 뒤에 new option을 넣어야한다고 하는데
        //이게 무슨 의미인지 명확하게 이해가 안됨(document?)
        //https://mongoosejs.com/docs/tutorials/findoneandupdate.html
        const changedUser = await UserModel.findOneAndUpdate(filter, update, {new : true})
        console.log('password changed : ',changedUser.password)
        return changedUser
    }
}

export  {User}
