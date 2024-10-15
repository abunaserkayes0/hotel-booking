import handelPrivetRoute from "@/libs/handelPrivetRoute";
import PaymentForm from "@/components/payment/PaymentForm";
import { getUserById } from "@/database/users/users.query";
import { getHotelDetailsById } from "@/database/hotels/hotels.query";
import getDateDifference from "@/utils/datediffernce";


export default async function Payment({ params: { id }, searchParams: { destination, checkin, checkout } }) {
    const loggedInUser = await handelPrivetRoute();
    const userId = await getUserById(loggedInUser?.email);
    const hotelInfo = await getHotelDetailsById(id, checkin, checkout);

    const hasCheckinAndCheckout = checkin && checkout;
    let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
    let days;
    if (hasCheckinAndCheckout) {
        days = getDateDifference(checkin, checkout);
        cost = cost * days;
    }


    return (
        <>
            <section className="container">
                <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                    <h2 className="font-bold text-2xl">Payment Details</h2>
                    <p className="text-gray-600 text-sm">You have picked <b>Effotel By {hotelInfo?.name}</b> and base price is <b>${cost.toFixed(0)} for stay {days} day's in Hotel</b>
                    </p>
                    <PaymentForm loggedInUser={loggedInUser} hotelInfo={hotelInfo} destination={destination} checkin={checkin} checkout={checkout} />
                </div>
            </section>
        </>
    );
}