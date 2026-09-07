import React from 'react';

const FoodCardSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800">
      {/* Image Skeleton */}
      <div className="aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800" />

      {/* Body Skeleton */}
      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-2.5">
          <div className="h-5 w-3/4 rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-3.5 w-full rounded-md bg-slate-200 dark:bg-slate-800" />
          <div className="h-3.5 w-2/3 rounded-md bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Price Skeleton */}
        <div className="mt-5 h-7 w-20 rounded-md bg-slate-200 dark:bg-slate-800" />

        {/* Button Skeletons */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;