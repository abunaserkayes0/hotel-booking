import mongoose, { Schema } from 'mongoose';

const usersModels = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.models.users ?? mongoose.model('users', usersModels)