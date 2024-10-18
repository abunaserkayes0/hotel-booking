import { getAllHotels } from "@/database/hotels/hotels.query";
import HotelCard from "./HotelCard";

const HotelList = async ({
  destination,
  checkin,
  checkout,
  category,
  priceRange,
  priceQuality,
}) => {
  const allHotels = await getAllHotels(
    destination,
    checkin,
    checkout,
    category,
    priceRange,
    priceQuality
  );
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels?.map((hotelInfo) => (
          <HotelCard
            key={hotelInfo.id}
            hotelInfo={hotelInfo}
            destination={destination}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
