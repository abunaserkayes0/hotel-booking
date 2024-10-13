import { replaceIdByArray, replaceIdByObject } from "@/utils/replaceId";
import hotelsModel from "./hotels.model"
import { findBookings } from "../bookings/bookings.query";

export const getAllHotels = async (destination, checkin, checkout) => {
    const regex = new RegExp(destination, 'i');
    const hotelsByDestination = await hotelsModel.find({ city: { $regex: regex } }).select(["name", "city", "highRate", "lowRate", "thumbNailUrl", "propertyCategory"]).lean();

    let allHotels = hotelsByDestination;

    if (checkin && checkout) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBookings(hotel._id, checkin, checkout);
                if (found) {
                    hotel['isBooked'] = true;
                } else {
                    hotel['isBooked'] = false;
                }
                return hotel;
            })
        )
    }

    return replaceIdByArray(allHotels);

}


export const getHotelDetailsById = async (hotelId, checkin, checkout) => {
    const hotel = await hotelsModel.findById(hotelId).lean();

    if (checkin && checkout) {
        const found = await findBookings(hotel._id, checkin, checkout);
        if (found) {
            hotel['isBooked'] = true;
        } else {
            hotel['isBooked'] = false;
        }
    }

    return replaceIdByObject(hotel)
}