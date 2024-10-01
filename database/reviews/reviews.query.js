import { replaceIdByArray } from "@/utils/replaceId";
import reviewsModel from "./reviews.model"

export const getAllReviews = async () => {
    const allReviews = await reviewsModel.find().lean();
    return replaceIdByArray(allReviews)
}