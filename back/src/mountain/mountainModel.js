import {MountainModel} from './mountainSchema'

class Mountain {
    // static async read(data){
    //     const 
    // }
    static async totalMountainData(){
        const totalData = await MountainModel.countDocuments({})
        return totalData
    }

    static async findData(hideData, maxPost){
        const totalData = await MountainModel.find({})
        .skip(hideData)
        .limit(maxPost)
    }
}

export {Mountain}