import { UserModel } from './userSchema.js';

class   User {
    //추후 해당하는 기능 추가 예정

    //1.계정 생성
    static async create({newUser}){
        const createdNewUser = await UserModel.create(newUser);
        return createdNewUser
    }

    static async findByEmail({email}){
        const findUser = await UserModel.find({email : email})
        for(var i =0; i< findUser.length;i++){
            if (findUser[i].deleted == false){
                const result = findUser[i]
                return result
            }
        }
        
    }

    static async findByID(id){
        const findUser = await UserModel.findOne({id : id})
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
        const changedUser = await UserModel.findOneAndUpdate(filter, update)
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

        const changedUser = await UserModel.findOneAndUpdate(filter, update)
        console.log('password changed : ',changedUser.password)
        return changedUser
    }

    static async findByIDandChangePhoto(userID, image){
        const filter = {
            id : userID
        }
        const update = {
            defaultImage : image
        }

        const changedImage = await UserModel.findOneAndUpdate(filter, update)
        console.log('image changed' , changedImage.defaultImage)
        return changedImage
    }

    static async findByIDandDeleteUser(id){
        const filter = {
            id : id
        }
        const deleted = {
            deleted : true
        }
        const deletedUser = await UserModel.findOneAndUpdate(filter,deleted)
        return deletedUser
    }
}

export  {User}
