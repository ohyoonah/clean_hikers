import cors from "cors";
import express from "express";
import { userRouter } from "./src/user/userRouter.js";
import { commentRouter } from "./src/community/commentRouter.js";
import { postRouter } from "./src/community/postRouter.js";
import { personRouter } from "./src/community/personRouter.js";
import { mainRouter } from "./src/main/mainRouter.js";
import { mountainRouter } from "./src/mountain/mountainRouter.js";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 5000;

app.get("/", (req, res) => {
    res.send("hello world");
});

//라우터 추가
app.use("/user", userRouter);
app.use("/community", postRouter);
app.use("/community", commentRouter);
app.use("/community", personRouter);
app.use("/main", mainRouter);
app.use("/mountain", mountainRouter);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`${port}에 연결되었습니다`);
});
