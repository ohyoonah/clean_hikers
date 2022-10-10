import { PostModel } from "../schema/post.js";

class Post {
    static async create({ newPost }) {
        const createdNewPost = await PostModel.create(newPost);
        return createdNewPost;
    }

    static async findById({ id }) {
        const user = await PostModel.find({ id: id });
        return user;
    }

    static async findByPostId({ post_id }) {
        const post = await PostModel.findOne({ post_id: post_id });
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

export { Post };
