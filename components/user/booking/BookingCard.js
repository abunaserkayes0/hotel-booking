import { getHotelDetailsById } from "@/database/hotels/hotels.query";
import getDateDifference from "@/utils/datediffernce";

export default async function BookingCard({ booking }) {

    const hotelInfo = await getHotelDetailsById(booking?.hotelId);
    const days = getDateDifference(booking?.checkin, booking?.checkout)

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold">Effotel By {hotelInfo?.name}</h3>
                    <div className="text-sm text-gray-600 my-4">
                        <p>Check In: {booking?.checkin}</p>
                        <p>Check Out: {booking?.checkout}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-right">${((hotelInfo?.highRate + hotelInfo?.lowRate) / 2) * days}</h3>
                    <p className="text-sm text-gray-600">${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2} per night x {days} days</p>
                </div>
            </div>
        </>
    );
}