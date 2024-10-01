import mongoose, { Schema } from 'mongoose';

const reviewsModels = new Schema({
    hotelId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})


export default mongoose.models.reviews ?? mongoose.model('reviews', reviewsModels)