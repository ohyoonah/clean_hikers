import { Router } from "express";
import { mountainService } from "./mountainService.js";

const mountainRouter = Router();

mountainRouter.get("/", function (req, res, next) {
    console.log(req.query);
    console.log(req.params);
    res.send("this is mountainRouter");
});

mountainRouter.get("/detail", async function (req, res, next) {
    try {
        const queryData = req.query;
        const result = await mountainService.readData(queryData);

        res.status(200).json(result);
        // const readData = await
    } catch (error) {
        next(error);
    }
});

export { mountainRouter };
