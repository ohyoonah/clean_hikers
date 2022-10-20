import { Router } from 'express'
import { userService } from './userService.js'
import { loginRequired } from '../middlewares/loginRequired.js'

const userRouter = Router()


userRouter.get('/', function (req,res,next){
    res.send('this is userRouter')
})

userRouter.post('/register', async function (req,res,next){
    try{console.log(req.body)
    //email, nickname, password 값의 필요가 필요함
    const newUser = await userService.addUser(req.body)

    res.status(201).json(newUser)}
    catch(error){
        next(error)
    }
})

userRouter.post('/email-check', async function(req,res,next){
    try{
        const checkEmail = req.body.email
        const isEmailExist = await userService.findByEmail(checkEmail)
        if(isEmailExist){
            res.status(201).json({"message" : "사용할 수 있는 이메일입니다"})
        }
        else{
            res.status(200).json({"message" : "중복 된 이메일입니다"})
        }
    }
    catch(error){
        next(error)
    }
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

userRouter.get('/user-page',loginRequired,async function (req,res,next){
    try{
        const id = req.loginedUser.id
        const currentUser = await userService.findCurrentUserData(id)
        res.status(201).json(currentUser)
    }
    catch(error){
        next(error)
    }
})

userRouter.put('/nickname',loginRequired, async function(req,res,next){
    try{
        const id = req.loginedUser.id
        const nickname = req.body.nickname
        const currentUser = await  userService.changeUserNickname(id,nickname)
        res.status(201).json(currentUser)
    }catch(error){
        next(error)
    }
})

userRouter.put('/password',loginRequired, async function(req,res,next){
    try{
        const id = req.loginedUser.id
        const password = req.body.password
        const currentUser = await  userService.changeUserPassword(id,password)
        res.status(201).json(currentUser)
    }catch(error){
        next(error)
    }
})

userRouter.put('/picture',loginRequired,async function(req,res,next){
    try{
        const id = req.loginedUser.id
        const image = req.body.image
        const currentUser = await userService.changeUserImage(id,image)
        res.status(201).json(currentUser)
    }
    catch(error){
        next(error)
    }
})


userRouter.delete('/', loginRequired, async function(req,res,next){
    try{
        const id = req.loginedUser.id
        const currentUser = await userService.deleteThisUser(id)

        res.status(201).json(currentUser)
    }
    catch(error){
        next(error)
    }
})
export  {userRouter} 