import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ summary }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo hotelInfo={summary} source="details" />
      </div>
    </section>
  );
};

export default Summary;
