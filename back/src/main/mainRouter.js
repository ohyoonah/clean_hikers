import { Router } from "express";
import { mainService } from "./mainService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const mainRouter = Router();

//데이터 조회
mainRouter.get("/data", async function (req, res, next) {
    try {
        const data = await mainService.getData();

        ErrorMessage(data);
        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
});

export { mainRouter };
