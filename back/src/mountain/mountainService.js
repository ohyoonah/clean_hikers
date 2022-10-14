import { Mountain } from "../mongoDB/index.js"
import {paging} from "../middlewares/paging"
class mountainService{
    static async readData(page){
        try{
            const totalData = await Mountain.totalMountainData()
            const { startPage, endPage, hidePost, maxPost, totalPage, currentPage } = paging(page, totalData)

        }
        catch(error)
        {
            throw error
        }
    }
}

export {mountainService}