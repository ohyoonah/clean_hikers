import {PhotoModel} from '../schema/userPhotoSchema'

class Photo{
    static async create(newPhoto){
        const createdPhoto = await PhotoModel.create(newUser);
        return createdPhoto
    }

    static async readPhoto(userID){
        const currentPhoto = await PhotoModel.findOne({userID:userID})
        return currentPhoto
    }
}

export{Photo}