import express from 'express';
import { addReview, listReviews } from '../controllers/reviewController.js';
import authMiddleware from '../middleware/auth.js';

const reviewRouter = express.Router();

reviewRouter.post('/add', authMiddleware, addReview);
reviewRouter.get('/list/:productId', listReviews);

export default reviewRouter;