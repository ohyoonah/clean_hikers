import { Router } from 'express'
import { userService } from './userService.js'

const userRouter = Router()


userRouter.get('/', function (req,res,next){
    res.send('this is userRouter')
})

userRouter.post('/register', async function (req,res,next){
    console.log(req.body)
    //email, nickname, password 값의 필요가 필요함
    const newUser = await userService.addUser(req.body)

    res.status(201).json(newUser)
})


userRouter.post('/login', async function (req,res,next){
    const email = req.body.email
    const password = req.body.password

})
export  {userRouter} 