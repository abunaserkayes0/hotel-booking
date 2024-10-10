import { getAllHotels } from "@/database/hotels/hotels.query";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const allHotels = await getAllHotels();
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {allHotels.map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotelInfo={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
