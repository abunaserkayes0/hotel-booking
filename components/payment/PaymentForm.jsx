"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = async ({ loggedInUser, hotelInfo, checkin, checkout }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const fromData = new FormData(e.currentTarget);

      const hotelId = hotelInfo?.id;
      const userId = loggedInUser?.id;
      const checkin = fromData.get("checkin");
      const checkout = fromData.get("checkout");

      const payload = {
        hotelId,
        userId,
        checkin,
        checkout,
      };

      const response = fetch(`/api/auth/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      response.status === 201 && router.push("/bookings");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {error && <p className="text-red-300">{error.message}</p>}
      <form className="my-8" onSubmit={onSubmit}>
        <div className="my-4 space-y-2">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
            value={loggedInUser?.name}
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
            value={loggedInUser?.email}
          />
        </div>

        <div className="my-4 space-y-2">
          <span>Check in</span>
          <h4 className="mt-2">
            <input type="date" name="checkin" id="checkin" value={checkin} />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <span>Checkout</span>
          <h4 className="mt-2">
            <input type="date" name="checkout" id="checkout" value={checkout} />
          </h4>
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="card" className="block">
            Card Number
          </label>
          <input
            type="text"
            id="card"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="expiry" className="block">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <div className="my-4 space-y-2">
          <label htmlFor="cvv" className="block">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          />
        </div>

        <button
          disabled={hotelInfo?.isBooked}
          type="submit"
          className="btn-primary w-full"
        >
          Pay Now (${(hotelInfo?.highRate + hotelInfo?.lowRate) / 2})
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
