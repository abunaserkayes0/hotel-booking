import { replaceIdByArray } from "@/utils/replaceId";
import reviewsModel from "./reviews.model"

export const getAllReviews = async () => {
    const allReviews = await reviewsModel.find().lean();
    return replaceIdByArray(allReviews)
}

export const getHotelsForReview = async (hotelId) => {
    const review = await reviewsModel.find({ hotelId: hotelId }).lean();
    return replaceIdByArray(review)
}