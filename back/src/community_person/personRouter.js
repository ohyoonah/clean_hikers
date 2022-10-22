import is from "@sindresorhus/is";
import { Router } from "express";
import { personService } from "../community/communityService.js";
import { postService } from "../community/communityService.js";
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
personRouter.get("/posts/:postId/people", async function (req, res, next) {
    try {
        const post_id = req.params.postId;

        const people = await personService.getPersons({ post_id });

        ErrorMessage(people);
        res.status(200).send(people);
    } catch (error) {
        next(error);
    }
});

//모집 참여 여부 확인
personRouter.get("/posts/:postId/:email", async function (req, res, next) {
    try {
        const post_id = req.params.postId;
        const email = req.params.email;
        const being = await personService.beingPerson({ post_id, email });
        console.log(being);
        ErrorMessage(being);
        res.status(200).send(being);
    } catch (error) {
        next(error);
    }
});

// //모집 참여 여부 확인, 본인 게시글인지 여부 확인
// personRouter.get(
//     "/posts/:postId/:email/:userId",
//     async function (req, res, next) {
//         try {
//             const post_id = req.params.postId;
//             const email = req.params.email;
//             const user_id = req.params.userId;
//             const being = await personService.beingPerson({
//                 post_id,
//                 email,
//                 user_id,
//             });

//             ErrorMessage(being);
//             res.status(200).send(being);
//         } catch (error) {
//             next(error);
//         }
//     }
// );

export { personRouter };
