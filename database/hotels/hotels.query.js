import { replaceIdByArray } from "@/utils/replaceId";
import hotelsModel from "./hotels.model"

export const getAllHotels = async () => {
    const allHotels = await hotelsModel.find().lean();
    return replaceIdByArray(allHotels)
}