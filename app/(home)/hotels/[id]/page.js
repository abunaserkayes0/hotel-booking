import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import { getHotelDetailsById } from "@/database/hotels/hotels.query";

export default async function HotelDetails({ params: { id } }) {
    const hotelInfo = await getHotelDetailsById(id);
    return (
        <>
            <Summary summary={hotelInfo} />
            <Gallery gallery={hotelInfo?.gallery} />
            <Overview hotelInfo={hotelInfo} />
        </>
    );
}