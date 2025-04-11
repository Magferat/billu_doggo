// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },  // Optional
    description: { type: String },  // Optional
    category: { type: String, required: true },  // e.g., "food", "toy"
});

const Product = mongoose.model('Product', productSchema);

export default Product;
