import mongoose, { Schema } from 'mongoose';

const amenitiesModel = new Schema({
    name: {
        require: true,
        type: String
    },
    price: {
        require: true,
        type: Number,
    },
    instruction: {
        require: false,
        type: String,
    },
    hours: {
        require: false,
        type: String
    }

})

export default mongoose.models.amenities ?? mongoose.model('amenities', amenitiesModel)