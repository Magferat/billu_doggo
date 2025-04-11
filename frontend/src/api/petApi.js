
// frontend/src/api/petApi.js
import axios from 'axios';

const API_URL = '/api/pets/';

// Create new pet
export const createPet = async (petData, token) => {
    return await axios.post('http://localhost:5000/api/pets/create', petData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};



// Get all pets
export const getPets = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
