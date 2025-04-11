// controllers/petController.js
import Pet from '../models/Pet.js';

// Create Post
export const createPet = async (req, res) => {
    try {
        const { animalName, type, image, age, status, description } = req.body;

        const author = req.user.id; // or req.userId depending on your middleware
        const newPet = new Pet({ animalName, type, image, age, status, description, author });
        await newPet.save();
        res.status(201).json(newPet);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Get All Posts
export const getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit Post
export const editPets = async (req, res) => {
    try {
        const pets = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Post
export const deletePets = async (req, res) => {
    try {
        await Pet.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Post deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
