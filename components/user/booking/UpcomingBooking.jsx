import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      <div className="bg-[#F6F3E9] p-4 rounded-md">
        {bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))
        ) : (
          <div>
            <p className="text-red-400 font-semibold">
              Upcoming Booking is not available
            </p>
            <p className="text-base italic">
              please select your booking from bookings List
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingBooking;
