import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
const bookingModels = new Schema({
    hotelId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    checkin: {
        type: String,
        required: true,
    },
    checkout: {
        type: String,
        required: true,
    }
})

export default mongoose.models.bookings ?? mongoose.model('bookings', bookingModels);