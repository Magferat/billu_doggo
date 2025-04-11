// routes/postRoutes.js
import express from 'express';
import { createPet, getAllPets, editPets, deletePets } from '../controllers/petController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', verifyToken, createPet);
router.get('/', getAllPets);
router.put('/:id', verifyToken, editPets);
router.delete('/:id', verifyToken, deletePets);

export default router;
