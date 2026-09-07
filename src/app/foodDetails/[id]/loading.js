import React from 'react';

const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-8 animate-pulse">
        {/* Back Link Placeholder */}
        <div className="h-5 w-32 bg-slate-200 rounded-md dark:bg-slate-800" />

        {/* Main Grid: Image + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          {/* Image Placeholder */}
          <div className="lg:col-span-6">
            <div className="aspect-square w-full rounded-2xl bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Details Placeholder */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Badges */}
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
                <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
              </div>

              {/* Title */}
              <div className="h-9 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-lg" />

              {/* Price */}
              <div className="h-8 w-28 bg-slate-200 dark:bg-slate-800 rounded-lg mt-2" />

              {/* Short Specs / Meta */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800" />
                <div className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800" />
                <div className="h-16 rounded-xl bg-slate-100 dark:bg-slate-800" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Video Tutorial Skeleton */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="h-7 w-48 bg-slate-200 dark:bg-slate-800 rounded-md" />
          <div className="aspect-video w-full rounded-2xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;