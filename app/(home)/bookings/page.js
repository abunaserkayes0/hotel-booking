import PastBooking from "@/components/user/booking/PastBooking";
import UpcomingBooking from "@/components/user/booking/UpcomingBooking";
import ProfileInfo from "@/components/user/ProfileInfo";
import { getBookingByUserId } from "@/database/bookings/bookings.query";
import { getByUserEmail } from "@/database/users/users.query";
import { getPastBookings, getUpcomingBookings } from "@/utils/bookingsCheck";
import handelPrivetRoute from "@/libs/handelPrivetRoute";

export default async function Booking() {
    const currentUserInfo = await handelPrivetRoute();

    const loggedInUser = await getByUserEmail(currentUserInfo?.email);
    const bookings = await getBookingByUserId(loggedInUser?.id);

    const pastBooking = getPastBookings(bookings);
    const upcomingBooking = getUpcomingBookings(bookings);

    return (
        <>
            <section className="mt-[100px]">
                <div className="container">
                    <ProfileInfo />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking bookings={pastBooking} />
                        <UpcomingBooking bookings={upcomingBooking} />
                    </div>
                </div>
            </section>

        </>
    );
}