import { replaceIdByArray, replaceIdByObject } from "@/utils/replaceId";
import hotelsModel from "./hotels.model"

export const getAllHotels = async () => {
    const allHotels = await hotelsModel.find().select(["name", "city", "highRate", "lowRate", "thumbNailUrl", "propertyCategory"]).lean();
    return replaceIdByArray(allHotels)
}

export const getHotelDetailsById = async (hotelId) => {
    const hotel = await hotelsModel.findById(hotelId).lean();
    return replaceIdByObject(hotel)
}