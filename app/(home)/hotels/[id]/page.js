import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelDetailsById } from "@/database/hotels/hotels.query";

export default async function HotelDetails({ params: { id }, searchParams: { destination, checkin, checkout } }) {
    const hotelInfo = await getHotelDetailsById(id, checkin, checkout);
    return (
        <>
            <Summary summary={hotelInfo} destination={destination} checkin={checkin} checkout={checkout} />
            <Gallery gallery={hotelInfo?.gallery} />
            <Overview hotelInfo={hotelInfo} />
        </>
    );
}