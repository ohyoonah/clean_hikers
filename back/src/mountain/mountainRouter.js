import { Router } from 'express'
import { userService } from './mountainService.js'

const mountainRouter = Router()

mountainRouter.get('/',function(req,res,next){
    res.send('this is mountainRouter')
})

mountainRouter.get('/basic-data', function(req,res,next){
    try{
        const currentPage = req.body.page
        const maxData = req.body.maxData

        const readData = await 
    }
    catch(error){
        next(error)
    }
})

export {mountainRouter}