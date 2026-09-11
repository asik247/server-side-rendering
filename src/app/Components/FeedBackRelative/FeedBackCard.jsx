// "use client"
import React from "react";


const FeedBackCard = ({ fd }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md border p-5 hover:shadow-lg transition-all duration-300">
            {/* User Info */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center text-lg font-bold">
                    {fd?.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                        {fd?.name}
                    </h2>
                    <p className="text-xs text-gray-500">Customer Feedback</p>
                </div>
            </div>

            {/* Review */}
            <div className="mt-4">
                <p className="text-gray-600 leading-relaxed">
                    {fd?.review}
                </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-5">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
                   
                    Update
                </button>

                <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition">
                    
                    Delete
                </button>
            </div>
        </div>
    );
};

export default FeedBackCard;