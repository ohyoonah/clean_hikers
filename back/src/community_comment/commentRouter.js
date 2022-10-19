import is from "@sindresorhus/is";
import { Router } from "express";
import { commentService } from "../community/communityService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const commentRouter = Router();

// 댓글 추가
commentRouter.post("/posts/comment", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }

        const newComment = await commentService.addComment(req.body);

        ErrorMessage(newComment);
        res.status(201).json(newComment);
    } catch (error) {
        next(error);
    }
});

//댓글 조회
commentRouter.get("/posts/comments/:post_id", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;
        const comments = await commentService.getComments({ post_id });

        ErrorMessage(comments);
        res.status(200).send(comments);
    } catch (error) {
        next(error);
    }
});

//댓글 수정
commentRouter.put(
    "/posts/comments/:comment_id",
    async function (req, res, next) {
        try {
            const comment_id = req.params.comment_id;

            const toUpdate = req.body;

            const updatedComment = await commentService.setComment({
                comment_id,
                toUpdate,
            });

            ErrorMessage(updatedComment);
            res.status(200).json(updatedComment);
        } catch (error) {
            next(error);
        }
    }
);

// 댓글 삭제
commentRouter.delete(
    "/posts/comments/:comment_id",
    async function (req, res, next) {
        try {
            const comment_id = req.params.comment_id;
            const comments = await commentService.deleteComment({ comment_id });

            ErrorMessage(comments);
            res.send("삭제가 완료되었습니다.");
        } catch (error) {
            next(error);
        }
    }
);

export { commentRouter };
