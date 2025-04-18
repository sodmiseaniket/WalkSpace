import reviewModel from '../models/reviewModel.js';

// Fetch reviews for a specific product
const getReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await reviewModel.find({ productId }).sort({ date: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


// Add a new review (User must be logged in)
const addReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const userId = req.user?.id;  // Get user ID from token
        const userName = req.user?.name;

        if (!userId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        const newReview = new reviewModel({ userId, userName, productId, rating, comment });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export { getReviews, addReview };
