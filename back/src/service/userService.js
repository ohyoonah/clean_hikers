const {User} = require("../mongoDB")

class userService{
    static async addUser({email,nickname,password}){
        const id = 1
        const newUser = {id, email, nickname, password}

        const createdNewUser = await User.create({newUser})
        return createdNewUser
    }
}

module.exports = userService