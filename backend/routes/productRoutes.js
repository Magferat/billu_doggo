// routes/productRoutes.js
import express from 'express';
import { createProduct, getAllProducts, editProduct, deleteProduct } from '../controllers/productController.js';
import { verifyToken, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/add', verifyToken, isAdmin, createProduct);
router.get('/', getAllProducts);
router.put('/:id', verifyToken, isAdmin, editProduct);
router.delete('/:id', verifyToken, isAdmin, deleteProduct);

export default router;
