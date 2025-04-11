// frontend/src/pages/PetList.jsx
import React, { useEffect, useState } from 'react';
import { getPets } from '../api/petApi';

const PetList = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const data = await getPets();
            setPets(data);
        };
        fetchPets();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Available Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pets.map((pet) => (
                    <div key={pet._id} className="border p-4 rounded shadow">
                        <h3 className="text-lg font-bold">{pet.animalName}</h3>
                        <p>Type: {pet.type.join(', ')}</p>
                        <p>Age: {pet.age} years</p>
                        <p>Status: {pet.status.join(', ')}</p>
                        <p className="mt-2">{pet.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetList;
