import { PostModel } from "./postSchema.js";
import { CommentModel } from "./commentSchema.js";
// import { UserModel } from "../user/userModel.js";

class Post {
    static async create({ newPost }) {
        const createdNewPost = await await PostModel.create(newPost);
        return createdNewPost;
    }

    static async findByUserId({ user_id }) {
        const user = await PostModel.find({ user_id: user_id });
        return user;
    }

    static async findAll() {
        const posts = await PostModel.find();
        return posts;
    }

    static async findOne({ post_id }) {
        const post = await PostModel.findOne({ post_id: post_id });
        return post;
    }

    static async findByPostId({ post_id }) {
        const post = await PostModel.find({ post_id });
        return post;
    }

    static async update({ post_id, fieldToUpdate, newValue }) {
        const filter = { post_id: post_id };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updatedPost = await PostModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedPost;
    }

    static async deleteByPostId({ post_id }) {
        const post = await PostModel.deleteOne({ post_id: post_id });
        return post;
    }
}

// class Person {
//     static async create({ newPerson }) {
//         const createdNewPerson = await UserModel.create(newPerson);
//         return createdNewPerson;
//     }

//     static async findByUserId({ user_id }) {
//         const user = await UserModel.find({ user_id: user_id });
//         return user;
//     }

//     static async deleteByEmail({ email }) {
//         const person = await UserModel.deleteOne({ user_id: user_id });
//         return person;
//     }
// }

class Comment {
    static async create({ newComment }) {
        const createdNewComment = await await CommentModel.create(newComment);
        return createdNewComment;
    }

    static async findByPostId({ post_id }) {
        const commentInPost = await CommentModel.find({ post_id: post_id });
        return commentInPost;
    }

    static async findByCommentId({ comment_id }) {
        const comment = await CommentModel.findOne({ comment_id: comment_id });
        return comment;
    }

    static async findAll() {
        const comments = await CommentModel.find({});
        return comments;
    }

    static async update({ comment_id, fieldToUpdate, newValue }) {
        const filter = { comment_id: comment_id };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updatedComment = await CommentModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updatedComment;
    }

    static async deleteByCommentId({ comment_id }) {
        const comment = await CommentModel.deleteOne({
            comment_id: comment_id,
        });
        return comment;
    }
}

export { Post, Comment };
