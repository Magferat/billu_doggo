// models/Pets.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    animalName: { type: String, required: true },
    type: { type: String, enum: ['cat', 'dog', 'bird', 'other'], required: true },
    image: { type: String }, // Optional
    age: { type: String },   // Optional
    status: { type: String, enum: ['Buy', 'Foster', 'Adopt'], required: true },
    description: { type: String }, // Optional
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
