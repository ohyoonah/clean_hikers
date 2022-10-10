import is from "@sindresorhus/is";
import { Router } from "express";
import { postService } from "../service/postServece.js";
import { ifErrorMessage } from "../middlewares/errorMiddleware.js";

const postRouter = Router();

// 게시글 추가
postRouter.post("/community/post", async function (req, res, next) {
    try {
        if (is.emptyObject(req.body)) {
            throw new Error(
                "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;
        const nickname = req.body.nickname;
        const date = req.body.date;
        const header = req.body.header;
        const location = req.body.location;

        const newPost = await postService.addPost({
            id,
            title,
            description,
            nickname,
            date,
            header,
            location,
        });

        ifErrorMessage(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
});

//게시글 조회
postRouter.get("/community/posts/:id", async function (req, res, next) {
    try {
        const id = req.params.id;
        const posts = await postService.getPosts({ id });

        ifErrorMessage(posts);
        res.status(200).send(posts);
    } catch (error) {
        next(error);
    }
});

//게시글 수정
postRouter.put("/community/posts/:post_id", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;
        // const post_id = req.params.id;
        // postman에서 404에러가 나서 확인해보니깐
        // console.log(req.params); 이렇게 찍었더니
        // { post_id: 'd3a6015e-4d24-4e24-a2d3-6f93b3800041' }이게 나옴 즉 req.params.id가 아니라 req.params.post_id를 찍어야 했다.
        // console.log(post_id);
        const { title, description, date, nickname, header, location } =
            req.body;

        const toUpdate = {
            title,
            description,
            date,
            nickname,
            header,
            location,
        };
        const updatedPost = await postService.setPost({
            post_id,
            toUpdate,
        });

        ifErrorMessage(updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        next(error);
    }
});

// 게시글 삭제
postRouter.delete("/community/posts/:post_id", async function (req, res, next) {
    try {
        const post_id = req.params.post_id;
        const posts = await postService.deletePost({ post_id });

        ifErrorMessage(posts);
        res.send("삭제가 완료되었습니다.");
    } catch (error) {
        next(error);
    }
});

export { postRouter };
