import is from "@sindresorhus/is";
import { Router } from "express";
import { postService } from "./postService.js";
import { ErrorMessage } from "../middlewares/errorMiddleware.js";

const postRouter = Router();

// 게시글 추가
postRouter.post("/post", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }

        const newPost = await postService.addPost(req.body);

        ErrorMessage(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
});

//게시글 조회
postRouter.get("/posts/:user_id", async function (req, res, next) {
    try {
        const user_id = req.params.user_id;
        const posts = await postService.getPosts({ user_id });

        ErrorMessage(posts);
        res.status(200).send(posts);
    } catch (error) {
        next(error);
    }
});

//게시글 수정
postRouter.put("/posts/:post_id", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;

        const toUpdate = req.body;
        const updatedPost = await postService.setPost({
            post_id,
            toUpdate,
        });

        ErrorMessage(updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        next(error);
    }
});

// 게시글 삭제
postRouter.delete("/posts/:post_id", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;
        const posts = await postService.deletePost({ post_id });

        ErrorMessage(posts);
        res.send("삭제가 완료되었습니다.");
    } catch (error) {
        next(error);
    }
});

export { postRouter };
