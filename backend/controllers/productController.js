// controllers/productController.js
import Product from '../models/Product.js';

// Create Product
export const createProduct = async (req, res) => {
    try {
        const { name, price, image, description, category } = req.body;
        const newProduct = new Product({ name, price, image, description, category });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit Product
export const editProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
