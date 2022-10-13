import { Schema, model } from "mongoose";

const PersonSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            // ref: "User",
            required: true,
        },
        nickname: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const PersonModel = model("Person", PersonSchema);

export { PersonModel };
