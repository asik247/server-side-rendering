import React from 'react';
import FeedbackSkeleton from './FeedBackSkeletion';

const FeedBackLoading = () => {
    return (
        <div className="max-w-7xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
                <FeedbackSkeleton key={index}></FeedbackSkeleton>
            ))}
        </div>
    );
};

export default FeedBackLoading;
