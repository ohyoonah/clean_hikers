import {Router} from "express"
import { mainService } from "./mainService.js"

const mainRouter = Router()

mainRouter.get('/',function(req,res,next){
    res.send('this is main Router')
})

export {mainRouter}