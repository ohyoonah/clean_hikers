import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
    {
        comment_id: {
            type: String,
            required: true,
        },
        post_id: {
            type: String,
            required: true,
        },
        user_id: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CommentModel = model("Comment", CommentSchema);

export { CommentModel };
