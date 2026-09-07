import React from 'react';

const ReviewSkeletion = () => (
    <div className="animate-pulse rounded-2xl bg-white p-6 border border-slate-100 shadow-sm dark:bg-slate-900 dark:border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Avatar Skeleton */}
                <div className="h-11 w-11 rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2">
                    {/* Name */}
                    <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />
                    {/* Date */}
                    <div className="h-3 w-16 rounded bg-slate-200 dark:bg-slate-800" />
                </div>
            </div>
            {/* Stars Skeleton */}
            <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* Comment Skeleton */}
        <div className="space-y-2 pt-2">
            <div className="h-3.5 w-full rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-3.5 w-5/6 rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-3.5 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
    </div>
);



export default ReviewSkeletion;