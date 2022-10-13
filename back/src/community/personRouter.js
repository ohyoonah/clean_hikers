import is from "@sindresorhus/is";
import { Router } from "express";
import { personService } from "./communityService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const personRouter = Router();

// 모집인원 추가
personRouter.post("/post/person", async function (req, res, next) {
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
personRouter.get("/posts/persons/:user_id", async function (req, res, next) {
    try {
        const user_id = req.params.person.user_id;
        const person = await personService.setPerson({ user_id });
        // 조회 전에 모집인원 개인정보 리프레쉬..?
        const persons = await personService.getPersons({ user_id });

        ErrorMessage(persons);
        res.status(200).send(persons);
    } catch (error) {
        next(error);
    }
});

// 모집인원 삭제
personRouter.delete("/posts/persons/:user_id", async function (req, res, next) {
    try {
        const user_id = req.params.person.user_id;
        const persons = await personService.deletePerson({ user_id });

        ErrorMessage(persons);
        res.send("삭제가 완료되었습니다.");
    } catch (error) {
        next(error);
    }
});

export { personRouter };
