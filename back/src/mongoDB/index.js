const mongoose =require('mongoose')
const {User} =require('./model/user')

require('dotenv').config()
const {MONGO_URI} = process.env

mongoose.connect(
    MONGO_URI
)
.then(()=> console.log('MongoDB와 연결에 성공했습니다'))
.catch(error => console.error(error))

module.exports ={
    User
}