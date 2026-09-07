import React from 'react';
import ReviewSkeletion from '../Components/ReviewSkeletion';

const ReviewsLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_,index)=>(
                <ReviewSkeletion key={index}></ReviewSkeletion>
            ))}
        </div>
    );
};

export default ReviewsLoading;