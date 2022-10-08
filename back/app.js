const express = require('express')
const app = express()
const port = 5000
//swagger.js에서 내용을 가져옴
const {swaggerUi, specs} = require('./swagger/swagger.js')

//라우터 추가
const userRouter = require('./src/router/userRouter')


/*
@swagger
/product :
    get:
        tags:
        -pro
*/
app.get('/', (req,res) => {
    res.send('hello world')
})

app.use('/user', userRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, ()=>{
    console.log(`${port}에 연결되었습니다`)
})