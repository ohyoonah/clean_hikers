import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        id: {
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
            type: {
                type: String,
                default: "Point", //Geobetry type => Point => 위도 경도 받아옴
            },
            Coordinates: [Number],
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

PostSchema.index({ locationi: "2dsphere" });

const PostModel = model("Post", PostSchema);

export { PostModel };
