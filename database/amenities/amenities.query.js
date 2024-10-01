import { replaceIdByArray } from "@/utils/replaceId";
import amenitiesModel from "./amenities.model";

export const getAllAmenities = async () => {
    const allQuery = await amenitiesModel.find().lean();
    return replaceIdByArray(allQuery);

}