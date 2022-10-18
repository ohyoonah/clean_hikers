import { MountainModel } from "./mountainSchema.js";

class Mountain {
    // static async read(data){
    //     const
    // }
    static async totalMountainData() {
        const totalData = await MountainModel.countDocuments({});
        return totalData;
    }

    static async fullMountainData() {
        const data = await MountainModel.find();
        return data;
    }

    static async findData(mountain, location, level) {
        const regex = (pattern) => new RegExp(`.*${pattern}.*`);
        const mountainRegex = regex(mountain);
        const locationRegex = regex(location);
        const difficultyRegex = regex(level);
        var searchJson = {};

        if (mountain) {
            searchJson.name = { $regex: mountainRegex };
        }
        if (location) {
            searchJson.address = { $regex: locationRegex };
        }
        if (level) {
            searchJson.difficulty = { $regex: difficultyRegex };
        }
        console.log(searchJson);
        const totalData = await MountainModel.find(searchJson);
        // console.log(totalData)
        return totalData;
    }
}

export { Mountain };
