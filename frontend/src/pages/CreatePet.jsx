import React, { useState } from 'react';
import { createPet } from '../api/petApi';
import { useNavigate } from 'react-router-dom';

const CreatePet = () => {
    const [animalName, setAnimalName] = useState('');
    const [type, setType] = useState('');  // Single selection for type
    const [age, setAge] = useState('');  // User will enter age directly (e.g., "1 yr" or "2 m")
    const [status, setStatus] = useState('');  // Status (could be adoption status or availability)
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            alert('You must be logged in to create a post.');
            return;
        }

        const petData = {
            animalName,
            type,
            age,
            status,
            description,
        };

        try {
            await createPet(petData, token);
            alert('Pet posted successfully!');
            navigate('/pets');
        } catch (error) {
            console.error(error);
            alert('Failed to create pet post');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Create a Pet Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Animal Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={animalName}
                        onChange={(e) => setAnimalName(e.target.value)}
                        placeholder="Enter animal name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Type</label>
                    <select
                        className="form-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select Animal Type</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="bird">Bird</option>
                        <option value="other">Other</option>

                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter age (e.g., 1 yr, 2 m)"
                        required
                    />
                    <div className="form-text">Enter age in the format 'X yr' or 'X m' (e.g., 1 yr, 2 m).</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="form-select"
                    >
                        <option value="" disabled>Select Status</option>
                        <option value="Buy">Buy</option>
                        <option value="Adopt">Adopted</option>
                        <option value="Foster">Foster</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write a short description..."
                        rows="3"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Post Pet
                </button>
            </form>
        </div>
    );
};

export default CreatePet;
