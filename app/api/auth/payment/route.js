import bookingsModel from "@/database/bookings/bookings.model";
import { dbConnect } from "@/database/dbConnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export const POST = async (request) => {

    const { hotelId, userId, checkin, checkout } = await request.json();
    await dbConnect();

    const payload = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkin,
        checkout
    }

    try {
        await bookingsModel.create(payload);
        return new NextResponse("Sucessfully created", {
            status: 201,
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        })
    }

}