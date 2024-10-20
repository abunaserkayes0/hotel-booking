import { replaceIdByArray, replaceIdByObject } from "@/utils/replaceId";
import hotelsModel from "./hotels.model"
import { findBookings } from "../bookings/bookings.query";
import { getAmenitiesByName } from "../amenities/amenities.query";

export const getAllHotels = async (destination, checkin, checkout, category, priceRange, priceQuality, aminity) => {

    const regex = new RegExp(destination, 'i');
    const hotelsByDestination = await hotelsModel.find({ city: { $regex: regex } }).select(["name", "city", "highRate", "lowRate", "thumbNailUrl", "propertyCategory", "amenities"]).lean();

    let allHotels = hotelsByDestination;

    const priceMatch = priceRange ? priceRange.split('|') : [];

    if (priceMatch.length > 0) {
        allHotels = allHotels.filter(hotel => {
            return priceMatch.some((item) => {
                const [minPrice, maxPrice] = item.split("-").map(Number);
                return hotel.lowRate >= minPrice && hotel.highRate <= maxPrice;
            });
        });
    }

    const categoryMatch = category.split('|');
    if (category) {
        allHotels = allHotels.filter(hotel => { return categoryMatch.includes(hotel.propertyCategory.toString()) });
    }

    if (priceQuality == 'highToLow') {
        allHotels = allHotels.sort((a, b) => b.highRate - a.highRate);
    } else {
        allHotels = allHotels.sort((a, b) => a.highRate - b.highRate);
    }


    const aminityMatch = aminity.split("|");

    const amenitiesList = await getAmenitiesByName(aminity.toLowerCase().trim());

    console.log(aminityMatch);
    console.log(amenitiesList);
    console.log(hotelsByDestination);




    if (checkin && checkout) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBookings(hotel?._id, checkin, checkout);
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
        const found = await findBookings(hotel?._id, checkin, checkout);
        if (found) {
            hotel['isBooked'] = true;
        } else {
            hotel['isBooked'] = false;
        }
    }

    return replaceIdByObject(hotel)
}