import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ summary, destination, checkin, checkout }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo
          source="details"
          hotelInfo={summary}
          destination={destination}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
};

export default Summary;
