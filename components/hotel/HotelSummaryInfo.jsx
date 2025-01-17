import Link from "next/link";
import HotelRatings from "./HotelRatings";
import HotelReviews from "./HotelReviews";

const HotelSummaryInfo = ({
  fromListPage,
  hotelInfo,
  destination,
  checkin,
  checkout,
}) => {
  let paramsSearch = "";

  if (checkin && checkout) {
    paramsSearch = `?destination=${destination}&checkin=${checkin}&checkout=${checkout}`;
  }

  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {hotelInfo?.name}
        </h2>
        <p>📍 {hotelInfo?.city}</p>
        <HotelRatings hotelId={hotelInfo?.id} />
        <HotelReviews hotelId={hotelInfo?.id} />
        <p className="text-green-600 font-bold">
          {hotelInfo?.propertyCategory} Star Categories
        </p>
        <br />
        {hotelInfo.isBooked && <span className="font-semibold">Sold Out</span>}
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${(hotelInfo?.lowRate + hotelInfo?.highRate) / 2}/night
        </h2>
        <p className=" text-right text-red-600">
          Per Night for {hotelInfo?.propertyCategory} Rooms
        </p>
        {fromListPage ? (
          <Link
            href={`/hotels/${hotelInfo.id}${paramsSearch}`}
            className="btn-primary "
          >
            Details
          </Link>
        ) : (
          <Link
            href={
              hotelInfo?.isBooked
                ? "#"
                : `/hotels/${hotelInfo.id}/payment${paramsSearch}`
            }
            className={hotelInfo?.isBooked ? "btn-disabled" : "btn-primary"}
          >
            Book
          </Link>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
