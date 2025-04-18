import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewPage = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(5);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch reviews for the product
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/api/reviews/${productId}`);
                setReviews(Array.isArray(response.data) ? response.data : []);
            } catch (err) {
                console.error("Error fetching reviews:", err);
                setError("Failed to load reviews.");
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [productId]);

    // Submit a new review
    const handleReviewSubmit = async () => {
        if (!newReview.trim()) return;
        try {
            const response = await axios.post('/api/reviews', {
                productId,
                comment: newReview,
                rating,
            });
            setReviews([response.data, ...reviews]); // Add new review at the top
            setNewReview('');
            setRating(5);
        } catch (err) {
            console.error("Error submitting review:", err);
            setError("Failed to submit review.");
        }
    };

    return (
        <div className="mt-10 border p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800">Customer Reviews</h2>

            {/* Error Message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Display Existing Reviews */}
            {loading ? (
                <p className="text-gray-500 mt-3">Loading reviews...</p>
            ) : reviews.length > 0 ? (
                reviews.map((review, index) => (
                    <div key={index} className="mt-4 border-b pb-3">
                        <p className="text-gray-700">{review.comment}</p>
                        <p className="text-yellow-500 text-sm">⭐ {review.rating}/5</p>
                        <p className="text-gray-400 text-xs">{new Date(review.createdAt).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 mt-3">No reviews yet.</p>
            )}

            {/* Submit New Review */}
            <div className="mt-6">
                <textarea
                    className="w-full border rounded-md p-2 text-black"
                    placeholder="Write a review..."
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                />
                <div className="flex items-center gap-2 mt-2 text-black">
                    <span className="text-gray-700">Rating:</span>
                    <select className="border p-1 rounded" value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                        {[5, 4, 3, 2, 1].map((num) => (
                            <option key={num} value={num}>{num} Stars</option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={handleReviewSubmit}
                    className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:bg-gray-500"
                    disabled={!newReview.trim()}
                >
                    Submit Review
                </button>
            </div>
        </div>
    );
};

export default ReviewPage;
