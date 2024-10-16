import { replaceIdByArray } from "@/utils/replaceId";
import bookingsModel from "./bookings.model"
import { isBetweenDate } from "@/utils/datefilter";

export const getAllBookings = async () => {
    const allBookings = await bookingsModel.find().lean();
    return replaceIdByArray(allBookings);
}

export const findBookings = async (hotelId, checkin, checkout) => {
    const bookings = await bookingsModel.find({ hotelId: hotelId.toString() }).lean();
    const foundBookings = bookings.find((booking) => {
        return (
            isBetweenDate(checkin, booking.checkin, booking.checkout) ||
            isBetweenDate(checkout, booking.checkin, booking.checkout)
        )
    })
    return foundBookings;
}

export const getBookingByUserId = async (userId) => {
    const booking = await bookingsModel.find({ userId: userId }).lean();
    return replaceIdByArray(booking);
}