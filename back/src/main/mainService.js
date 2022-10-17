import { Mountain } from "../mongoDB/index.js";

class mainService {
    static async getData() {
        const data = await Mountain.fullMountainData();
        console.log("data", data);
        return data;
    }
}

export { mainService };
