// import React from 'react';
// const fetchFoodDetailsData = async (id)=>{
//     const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)
//     const data = await res.json();
//     return data.details;
// }
// const FoodsDetailsPage =async ({params}) => {
//     const {id} =await params;
//     const detailsFood = await fetchFoodDetailsData(id);
//     return (
//         <div>
//             <h2>FoodDetils page{detailsFood.title}</h2>
//         </div>
//     );
// };

// export default FoodsDetailsPage;

import React from 'react';
import Link from 'next/link';

// Helper to convert standard YouTube links into embed URLs
const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
        ? `https://www.youtube.com/embed/${match[2]}`
        : null;
};

const fetchFoodDetailsData = async (id) => {
    try {
        const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`, {
            cache: 'no-store', // or next: { revalidate: 60 }
        });
        if (!res.ok) throw new Error('Failed to fetch food data');
        const data = await res.json();
        return data.details;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const FoodsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const detailsFood = await fetchFoodDetailsData(id);

    if (!detailsFood) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Food Item Not Found</h2>
                <p className="mt-2 text-slate-500">We couldn't locate the recipe you are looking for.</p>
                <Link
                    href="/"
                    className="mt-5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
                >
                    Back to Menu
                </Link>
            </div>
        );
    }

    const {
        title,
        foodImg,
        price,
        category,
        area,
        video,
    } = detailsFood;

    const embedVideoUrl = getYouTubeEmbedUrl(video);

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Navigation Breadcrumb */}
                <nav>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition"
                    >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Catalog
                    </Link>
                </nav>

                {/* Main Product Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">

                    {/* Left: Food Image */}
                    <div className="lg:col-span-6 flex items-center justify-center">
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-inner group">
                            <img
                                src={foodImg}
                                alt={title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                                {category}
                            </span>
                        </div>
                    </div>

                    {/* Right: Details & Order Box */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    {category} Friendly
                                </span>
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                    Origin: {area}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                {title}
                            </h1>

                            {/* Pricing */}
                            <div className="flex items-baseline gap-2 pt-2">
                                <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                                    ৳{price}
                                </span>
                                <span className="text-sm font-medium text-slate-400 line-through">
                                    ৳{Math.round(price * 1.25)}
                                </span>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded-md">
                                    Save 20%
                                </span>
                            </div>

                            {/* Quick Spec Highlights */}
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-center">
                                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Cuisine</span>
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">{area}</span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-center">
                                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Preparation</span>
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">~25-35 min</span>
                                </div>
                                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-center">
                                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">Portion</span>
                                    <span className="block text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">1-2 Servings</span>
                                </div>
                            </div>
                        </div>

                        {/* Action CTAs */}
                        <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-500 active:scale-[0.99]">
                                <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Add to Cart
                            </button>

                            <button className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 text-sm font-bold text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-[0.99]">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video Tutorial Section */}
                {embedVideoUrl && (
                    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/60">
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </span>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recipe Video Walkthrough</h2>
                        </div>

                        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-md">
                            <iframe
                                src={embedVideoUrl}
                                title={`${title} recipe preparation`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-full w-full border-0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FoodsDetailsPage;