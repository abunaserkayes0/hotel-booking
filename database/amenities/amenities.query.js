import { replaceIdByArray, replaceIdByObject } from "@/utils/replaceId";
import amenitiesModel from "./amenities.model";

export const getAllAmenities = async () => {
    const allQuery = await amenitiesModel.find().lean();
    return replaceIdByArray(allQuery);
}

export const getAmenitiesByName = async (name) => {
    const allQuery = await amenitiesModel.find().lean();
    const nameByFilter = allQuery.filter(amenity => amenity.name.toLowerCase().split(' ').join("").includes(name.toLowerCase()));
    return replaceIdByArray(nameByFilter);

}