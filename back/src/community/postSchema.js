import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        post_id: {
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
            default: "제목을 입력해 주세요.",
        },
        description: {
            type: String,
            required: false,
            default: "내용을 입력하세요",
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        },
        header: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        person: [
            {
                type: Object,
                // ref: "Person",
            },
        ],
        personnel: {
            type: Number,
            required: true,
        },
        station: {
            type: String,
            emum: ["모집중", "모집완료"],
            default: "모집중",
        },
        comment: [
            {
                type: Object,
                // ref: "Comment",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const PostModel = model("Post", PostSchema);

export { PostModel };
