import is from "@sindresorhus/is";
import { Router } from "express";
import { personService } from "./communityService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const personRouter = Router();

// 모집인원 추가
personRouter.post("/posts/:post_id/user", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }

        const newPerson = await personService.addPerson(req.body);

        ErrorMessage(newPerson);
        res.status(201).json(newPerson);
    } catch (error) {
        next(error);
    }
});

//모집인원 조회
personRouter.get("/posts/:post_id/people", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;

        const people = await personService.getPersons({ post_id });

        ErrorMessage(people);
        res.status(200).send(people);
    } catch (error) {
        next(error);
    }
});

export { personRouter };
