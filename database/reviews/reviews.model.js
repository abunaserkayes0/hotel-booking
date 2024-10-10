import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
const reviewsModels = new Schema({
    hotelId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})


export default mongoose.models.reviews ?? mongoose.model('reviews', reviewsModels)