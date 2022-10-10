const express = require('express')
const { userService } = require('../service/userService')
const userRouter = express.Router()


userRouter.get('/', function (req,res,next){
    res.send('this is userRouter')
})

userRouter.post('/register', async function (req,res,next){
    const nickname ='1111'
    const email = 'test1@2'
    const password  = '1234'

    const newUser = await userService.addUser(email, nickname, password)

    res.status(201).json(newUser)
})

module.exports = userRouter 