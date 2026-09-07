"use client"
import React, { useEffect, useState } from 'react';
import ReviewsLoading from './ReviewsLoading';
import ReviewCard from '../Components/ReviewCard';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);
    //? useEffect.
    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews || [])
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <ReviewsLoading></ReviewsLoading>
    }
    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        Customer Reviews
                    </h2>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                        {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
                    </span>
                </div>

                {/* Reviews Grid */}
                {reviews.length === 0 ? (
                    <div className="text-center py-12 text-slate-500">
                        No reviews found yet.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reviews.map((review, idx) => (
                            <ReviewCard key={review.id || review._id || idx} review={review} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewsPage;