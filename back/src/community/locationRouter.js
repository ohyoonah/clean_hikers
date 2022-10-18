import is from "@sindresorhus/is";
import { Router } from "express";
import { locationService } from "./communityService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const locationRouter = Router();

// location 이름 조회 for dropdown
locationRouter.get("/location", async function (req, res, next) {
    try {
        const data = await locationService.getData();
        const name = data.map((object) => {
            return object.name;
        });
        console.log(name);
        ErrorMessage(name);
        res.status(200).send(name);
    } catch (error) {
        next(error);
    }
});
export { locationRouter };
