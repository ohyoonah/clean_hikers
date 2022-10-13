import jwt from 'jsonwebtoken'

const loginRequired = (req,res,next) =>{
    try{
        req.loginedUser = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY)
        return next()
    }
    catch(error){
        next(error)
    }
}


export {loginRequired}