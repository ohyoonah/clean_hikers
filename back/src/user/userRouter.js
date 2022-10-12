import { Router } from 'express'
import { userService } from './userService.js'
import { loginRequired } from '../middlewares/loginRequired.js'

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
    try{const email = req.body.email
    const password = req.body.password

    const login = await userService.login({email, password})

    res.status(201).json({jwt : login})
}catch(error){
    next(error)
}   
})

userRouter.post('/userPage',loginRequired,async function (req,res,next){
    try{
        
        const id = req.loginedUser.id
        const currentUser = await userService.findCurrentUserData(id)
        res.status(201).json(currentUser)
    }
    catch(error){
        next(error)
    }
})

userRouter.put('/fixuser',loginRequired, async function(req,res,next){
    
})
export  {userRouter} 