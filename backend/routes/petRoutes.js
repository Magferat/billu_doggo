import express from 'express';
import { createPet, getAllPets, editPets, deletePets, getPetById } from '../controllers/petController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', verifyToken, createPet);
router.get('/', getAllPets);
router.get('/:id', getPetById);
router.put('/:id', verifyToken, editPets);
router.delete('/:id', verifyToken, deletePets);

export default router;
