import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPetById } from '../api/petApi';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() => {
        const fetchPet = async () => {
            const data = await getPetById(id);
            setPet(data);
        };
        fetchPet();
    }, [id]);

    if (!pet) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{pet.animalName}</h2>
            <img src={pet.image} alt={pet.animalName} className="w-64 h-64 object-cover mb-4" />
            <p><strong>Type:</strong> {pet.type}</p>
            <p><strong>Age:</strong> {pet.age} years</p>
            <p><strong>Status:</strong> {pet.status}</p>
            <p className="mt-2"><strong>Description:</strong> {pet.description}</p>

            <p className="mt-2"><strong>Posted By:</strong> {pet.author ? `${pet.author.firstName} ${pet.author.lastName}` : 'Unknown'}</p>

        </div>
    );
};

export default PetDetails;
