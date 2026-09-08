import Link from 'next/link';
import React from 'react';
import AddToCutBtn from './Btns/AddToCutBtn';
import Image from 'next/image';

const FoodCard = ({ food, onAddToCart, onViewDetails }) => {
    const {
        id,
        title,
        foodImg,
        category,
        price = 12.99,
        rating = 4.8,
        reviewsCount = 120,
        description = 'Fresh ingredients prepared daily with special homemade spices.',
    } = food || {};

    /**
     * 
     * "id": 53025,
"title": "Ful Medames",
"catId": 12,
"foodImg": "https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg",
"price": 374,
"category": "Vegetarian"
     */

    return (
        <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:border-slate-800">
            {/* Media & Badges */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                {/* REmotely opt image */}
                {/* <img
                    src={foodImg}
                    alt={''}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                /> */}
                <Image width={400} height={300} src={foodImg}
                    alt={''}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"></Image>

                {/* Category Pill */}
                <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm dark:bg-slate-900/90 dark:text-slate-200">
                    {category}
                </span>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-amber-500/90 backdrop-blur-md px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{rating}</span>
                    <span className="text-amber-100 font-normal">({reviewsCount})</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 line-clamp-1 dark:text-slate-100">
                        {title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 line-clamp-2 dark:text-slate-400 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">$</span>
                    <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {typeof price === 'number' ? price.toFixed(2) : price}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                    <Link href={`/foodDetails/${id}`}

                        className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                        View Details
                    </Link>

                    {/* Add to cut btn here */}
                    <AddToCutBtn food={food}></AddToCutBtn>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;