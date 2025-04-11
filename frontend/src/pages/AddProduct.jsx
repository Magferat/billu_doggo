import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        category: '',
        image: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem('token');

        axios.post('http://localhost:5000/api/products/add', productData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                alert('Product added successfully!');
                setProductData({ name: '', price: '', category: '', image: '', description: '' }); // Reset form
                navigate('/admin/products');
            })
            .catch((err) => {
                console.log(err.response?.data || err.message);
                alert('Error adding product: ' + (err.response?.data?.message || 'Something went wrong'));
            })
            .finally(() => setLoading(false));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={productData.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Product Price"
                value={productData.price}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                placeholder="Category"
                value={productData.category}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
                value={productData.image}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={productData.description}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" disabled={loading}>
                {loading ? '🕗 Adding...' : 'Add Product'}
            </button>
        </form>
    );
};

export default AddProduct;
