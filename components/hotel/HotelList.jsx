import { getAllHotels } from "@/database/hotels/hotels.query";
import HotelCard from "./HotelCard";
import NotFound from "../ui/NotFound";

const HotelList = async ({
  destination,
  checkin,
  checkout,
  category,
  priceRange,
  priceQuality,
  aminity,
}) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category,
    priceRange,
    priceQuality,
    aminity
  );
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.length > 0 ? (
          allHotels?.map((hotelInfo) => (
            <HotelCard
              key={hotelInfo.id}
              hotelInfo={hotelInfo}
              destination={destination}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default HotelList;
