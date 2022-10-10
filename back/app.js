import cors from "cors";
import express from "express";
import { postRouter } from "./src/router/postRouter.js";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;
//swagger.js에서 내용을 가져옴
import { swaggerUi, specs } from "./swagger/swagger.js";

/*
@swagger
/product :
    get:
        tags:
        -pro
*/
app.get("/", (req, res) => {
    res.send("hello world");
});

// app.use("/user", userRouter);
// app.use("/community/post", postRouter);
// app.use("/community", postRouter);
app.use(postRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//라우터 추가
// import { userRouter } from "./src/router/userRouter.js";
// import { postRouter } from "./src/router/postRouter.js";

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`${port}에 연결되었습니다`);
});

export { app };
