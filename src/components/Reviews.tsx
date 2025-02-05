'use client'
import { useState, useEffect } from 'react';

// Define the type for a review
interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export default function Reviews() {
  // State to manage reviews with explicit type
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 0 });

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews') || '[]') as Review[];
    setReviews(savedReviews);
  }, []);

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      const review: Review = { ...newReview, id: Date.now() }; // Add unique ID
      setReviews([...reviews, review]);
      setNewReview({ name: '', comment: '', rating: 0 }); // Reset form
    }
  };

  return (
    <div className="min-h-auto bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Your Review</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="comment"
              placeholder="Your Review"
              value={newReview.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              required
            />
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value={0} disabled>Select Rating</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white w-full font-semibold mt-4 py-2 rounded-lg"
              >
              Submit Review
            </button>
          </div>
        </form>

        {/* Display Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {'★'.repeat(review.rating).padEnd(5, '☆')}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <p className="text-gray-900 font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}