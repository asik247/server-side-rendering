import React from 'react';

const ReviewCard = ({ review }) => {
    const {
        userName = 'Anonymous Foodie',
        userImg,
        rating = 5,
        comment = 'Delicious food and excellent service! Highly recommended.',
        date = 'Recent',
        foodName,
    } = review || {};

    // রেটিং স্টার রেন্ডার করার হেল্পার
    const renderStars = (ratingCount) => {
        return Array.from({ length: 5 }).map((_, idx) => (
            <svg
                key={idx}
                className={`h-4 w-4 ${idx < ratingCount ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200 dark:text-slate-700 dark:fill-slate-700'
                    }`}
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
            <div>
                {/* ইউজার ইনফো ও রেটিং */}
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {userImg ? (
                            <img
                                src={userImg}
                                alt={userName}
                                className="h-11 w-11 rounded-full object-cover border border-emerald-100 dark:border-slate-700"
                            />
                        ) : (
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-base dark:bg-emerald-950 dark:text-emerald-300">
                                {userName.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <h4 className="font-semibold text-slate-800 dark:text-slate-100 text-sm sm:text-base">
                                {userName}
                            </h4>
                            <p className="text-xs text-slate-400">{date}</p>
                        </div>
                    </div>

                    {/* রেটিং স্টার */}
                    <div className="flex items-center gap-0.5">
                        {renderStars(rating)}
                    </div>
                </div>

                {/* ফুড ট্যাগ (যদি ডেটাতে থাকে) */}
                {foodName && (
                    <div className="mt-3">
                        <span className="inline-block rounded-md bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            Dish: {foodName}
                        </span>
                    </div>
                )}

                {/* কমেন্ট */}
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    “{comment}”
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;