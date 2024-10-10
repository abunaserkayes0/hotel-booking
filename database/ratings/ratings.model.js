import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
const ratingModels = new Schema({
    hotelId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    rating: {
        type: ObjectId,
        required: true
    },
})

export default mongoose.models.ratings ?? mongoose.model('ratings', ratingModels);