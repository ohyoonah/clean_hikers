const {UserModel} = require('../schema/user')

class User {
    //추후 해당하는 기능 추가 예정

    //1.계정 생성
    static async create({newUser}){
        const createdNewUser = await UserModel.create(newUser);
        return createdNewUser
    }
}

module.exports = {User}
