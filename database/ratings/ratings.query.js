import { replaceIdByArray } from "@/utils/replaceId";
import ratingsModel from "./ratings.model"

export const getAllRatings = async () => {
    const allRatings = await ratingsModel.find().lean();
    return replaceIdByArray(allRatings)
}