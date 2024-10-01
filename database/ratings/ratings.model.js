import mongoose, { Schema } from 'mongoose';

const ratingModels = new Schema({
    hotelId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
})

export default mongoose.models.ratings ?? mongoose.model('ratings', ratingModels);