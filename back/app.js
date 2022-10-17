import cors from "cors";
import express from "express";
import { userRouter } from "./src/user/userRouter.js";
import { commentRouter } from "./src/community/commentRouter.js";
import { postRouter } from "./src/community/postRouter.js";
import { personRouter } from "./src/community/personRouter.js";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

//라우터 추가
import { userRouter } from "./src/user/userRouter.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.use("/user", userRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`${port}에 연결되었습니다`);
});
