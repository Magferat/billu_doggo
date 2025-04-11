// // backend/routes/petRoutes.js
// import express from 'express';
// import { createPet, getAllPets } from '../controllers/petController.js';
// import { verifyToken } from '../middlewares/authMiddleware.js';

// const router = express.Router();

// // Create new pet post (only for logged in users)
// router.post('/', verifyToken, createPet);

// // Get all pet posts (public)
// router.get('/', getAllPets);

// export default router;
// routes/petRoutes.js

// in my routes/petRoutes.js

import express from 'express';
import { createPet, getAllPets, editPets, deletePets } from '../controllers/petController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', verifyToken, createPet);

router.get('/', getAllPets);
router.put('/:id', verifyToken, editPets);
router.delete('/:id', verifyToken, deletePets);

export default router;
