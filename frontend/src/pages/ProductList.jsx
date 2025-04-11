import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                alert(res.data.message);
                setProducts(products.filter(product => product._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Product List</h2>
            <div className="product-cards">
                {products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                        <Link to={`/admin/edit-product/${product._id}`}>Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
