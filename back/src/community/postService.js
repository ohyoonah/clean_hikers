import { Post } from "../mongoDB/index.js";
import { v4 } from "uuid";

class postService {
    static async addPost({
        user_id,
        nickname,
        title,
        description,
        date,
        person,
        personnel,
        station,
        header,
        location,
    }) {
        const post_id = v4();

        const newPost = {
            post_id,
            user_id,
            nickname,
            title,
            description,
            date,
            person,
            personnel,
            station,
            header,
            location,
        };

        const createdNewPost = await Post.create({ newPost });

        createdNewPost.errorMessage = null;

        return createdNewPost;
    }

    static async getPosts({ user_id }) {
        const posts = await Post.findByUserId({ user_id });
        return posts;
    }

    static async setPost({ post_id, toUpdate }) {
        let post = await Post.findByPostId({ post_id });

        if (!post) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.title) {
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.nickname) {
            const fieldToUpdate = "nickname";
            const newValue = toUpdate.nickname;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.date) {
            const fieldToUpdate = "date";
            const newValue = toUpdate.date;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.personnel) {
            const fieldToUpdate = "personnel";
            const newValue = toUpdate.personnel;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.station) {
            const fieldToUpdate = "station";
            const newValue = toUpdate.station;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.header) {
            const fieldToUpdate = "header";
            const newValue = toUpdate.header;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.location) {
            const fieldToUpdate = "location";
            const newValue = toUpdate.location;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        return post;
    }

    static async deletePost({ post_id }) {
        let posts = await Post.findByPostId({ post_id });

        if (!posts) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        posts = await Post.deleteByPostId({ post_id });

        return posts;
    }
}

export { postService };
