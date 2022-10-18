import { Mountain } from "../mongoDB/index.js";

class mainService {
    static async getData() {
        const data = await Mountain.findData();
        // console.log("data", data);
        return data;
    }
}

export { mainService };
