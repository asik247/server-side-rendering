import React from 'react';
import FoodCardSkeleton from './Components/FoodSkeletion';


const loading = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[...Array(12)].map((_,index)=>(
            <FoodCardSkeleton key={index}></FoodCardSkeleton>
          ))}
        </div>
    );
};

export default loading;