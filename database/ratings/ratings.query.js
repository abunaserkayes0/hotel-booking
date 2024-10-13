import { replaceIdByArray } from "@/utils/replaceId";
import ratingsModel from "./ratings.model"

export const getAllRatings = async () => {
    const allRatings = await ratingsModel.find().lean();
    return replaceIdByArray(allRatings)
}

export const getHotelsForRating = async (hotelId) => {
    const rating = await ratingsModel.find({ hotelId: hotelId }).lean();
    return replaceIdByArray(rating);
}