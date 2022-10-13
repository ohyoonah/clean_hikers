import { Post, Person, Comment } from "../mongoDB/index.js";
import { v4 } from "uuid";

class personService {
    static async addPerson({ user_id, nickname }) {
        const newPerson = { user_id, nickname };

        const createdNewPerson = await Person.create({ newPerson });
        createdNewPerson.errorMessage = null;

        return createdNewPerson;
    }

    static async getPersons({ user_id }) {
        const persons = await Person.findByUserId({ user_id });
        return persons;
    }

    static async setPerson({ user_id, toUpdate }) {
        let person = await Person.findByUserId({ user_id });

        if (!person) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.nickname) {
            const fieldToUpdate = "nickname";
            const newValue = toUpdate.nickname;
            person = await Person.update({ id, fieldToUpdate, newValue });
        }

        return person;
    }

    static async deletPerson({ user_id }) {
        let persons = await Person.findByUserId({ user_id });
        if (!persons) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확이해 주세요.";
            return { errorMessage };
        }

        persons = await Person.deleteByUserId({ user_id });
        return persons;
    }
}

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
        comment,
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
            comment,
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

    static async getAPosts({ post_id }) {
        const posts = await Post.findOne({ post_id });
        // console.log(posts);
        return posts;
    }

    static async getAllPosts() {
        const posts = await Post.findAll();
        return posts;
    }

    // static async putCommentPost() {
    //     cont posts = await Post.
    // }

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

        if (toUpdate.person) {
            const fieldToUpdate = "person";
            const newValue = toUpdate.person;
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

        if (toUpdate.comment) {
            const fieldToUpdate = "comment";
            const newValue = toUpdate.comment;
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

    static async addComment({
        post_id,
        user_id,
        nickname,
        title,
        description,
    }) {
        const comment_id = v4();

        const newComment = {
            comment_id,
            post_id,
            user_id,
            nickname,
            title,
            description,
        };

        const createdNewComment = await Comment.create({ newComment });

        // const toUpdate = { comment: createdNewComment };
        const toUpdate = await postService.getAPosts({ post_id });
        console.log("post불러옴 =>", toUpdate);
        console.log("comment", newComment);
        toUpdate.comment.push(newComment);
        // console.log("comment 추가함", toUpdate);
        const createPostComment = await postService.setPost({
            post_id,
            toUpdate,
        });
        // console.log(createdNewComment);

        createPostComment.errorMessage = null;

        return createPostComment;
    }

    static async getComments({ post_id }) {
        const comments = await Comment.findByPostId({ post_id });
        return comments;
    }

    static async setComment({ comment_id, toUpdate }) {
        let comment = await Comment.findByCommentId({ comment_id });

        if (!comment) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.nickname) {
            const fieldToUpdate = "nickname";
            const newValue = toUpdate.nickname;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        if (toUpdate.title) {
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        if (toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        return comment;
    }

    static async deleteComment({ comment_id }) {
        let comments = await Comment.findByCommentId({ comment_id });
        if (!comments) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        comments = await Comment.deleteByCommentId({ comment_id });
        return comments;
    }
}

export { postService, personService };
