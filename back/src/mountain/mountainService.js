import { Mountain } from "../mongoDB/index.js"
import {paging} from "../middlewares/paging.js"
class mountainService{
    static async readData(page){
        try{
            const totalData = await Mountain.totalMountainData()
            const { startPage, endPage, hidePost, maxPost, totalPage, currentPage } = paging(page, totalData,5,5)

        }
        catch(error)
        {
            throw error
        }
    }
}

export {mountainService}