import express from 'express';
import { getReviews, addReview } from '../controllers/reviewController.js';
import authUser from '../middleware/auth.js';

const reviewRouter = express.Router();

reviewRouter.get('/reviews/:productId', getReviews);
reviewRouter.post('/reviews', authUser, addReview); // Require authentication for submitting reviews

export default reviewRouter;
