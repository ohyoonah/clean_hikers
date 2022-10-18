import { Schema, model } from "mongoose";

const MountainSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        trash: {
            type: String,
            required: true,
        },

        latitude: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        difficulty: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

const MountainModel = model("Mountain", MountainSchema);

export { MountainModel };
