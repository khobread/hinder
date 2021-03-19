// For the Cards in DB

import mongoose from 'mongoose';

// Schema = model
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSchema)