// import FoodDetailsSkeleton from '@/app/Components/DetailSkeletion';
import FoodDetailsSkeleton from '@/app/Components/FoodDetailsSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div>
            {/* loain................
             */}
            {[...Array(1)].map((_,index)=>(
                <FoodDetailsSkeleton key={index}></FoodDetailsSkeleton>
            ))}
        </div>
    );
};

export default loading;