import { Mountain } from "../mongoDB/index.js";
import { MountainModel } from "./mountainSchema.js";

class mountainService {
    static async readData(query) {
        try {
            const mountainName = query.mountain || null;
            const mountainLocation = query.location || null;
            const mountainDifficulty = query.level || null;
            console.log(mountainName, mountainLocation, mountainDifficulty);
            const totalData = await Mountain.findData(
                mountainName,
                mountainLocation,
                mountainDifficulty
            );

            var page = Number(query.currentPage || 1);
            const perPage = 5;

            const total = totalData.length;
            console.log(total);

            const totalPage = Math.ceil(total / perPage);
            if (page > totalPage) {
                page = totalPage;
            }
            const currentPageList = totalData.slice(
                perPage * (page - 1),
                perPage * page
            );
            const result = {}

            for(var i = 0; i< currentPageList.length; i++){
                console.log(currentPageList[i])
                if(currentPageList[i]==undefined){
                    result.mountain = currentPageList.slice(0,i)
                    break
                }
                if(i == currentPageList.length -1){
                    result.mountain = currentPageList
                }
            }
            result["maxPage"] = totalPage ;
            console.log(typeof(result))
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async readDataBasedGarbage(){
        try{
            const totalData = await (await Mountain.findData()).sort(function(a,b){
                return -(a.trash - b.trash)
            });
            
            const result = totalData.slice(0,4)

            return result
        }
        catch(error){
            throw error
        }
    }
}

export { mountainService };
