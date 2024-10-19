import mongoose, { Schema } from 'mongoose';

const amenitiesModel = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        required: true,
        type: Number,
    },
    instruction: {
        required: false,
        type: String,
    },
    hours: {
        required: false,
        type: String
    }

})

export default mongoose.models.amenities ?? mongoose.model('amenities', amenitiesModel)