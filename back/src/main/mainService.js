import { Mountain } from "../mongoDB/index.js";

class mainService {
    static async getData() {
        const data = await Mountain.findData();

        return data;
    }
}

export { mainService };
