"use client";

import { context } from "@/ContextApi/ContextProvider";
import React, { useContext } from "react";

const AddToCut = () => {
    const { cart } = useContext(context);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-md">
            {/* Cart Icon */}
            <div className="relative">
                <svg
                    className="h-10 w-10 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>

                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                    {cart.length}
                </span>
            </div>

            {/* Cart Info */}
            <div>
                <h2 className="text-lg font-bold text-slate-800">
                    Shopping Cart
                </h2>

                <p className="text-sm text-slate-500">
                    {cart.length} Item{cart.length !== 1 ? "s" : ""} Added
                </p>

                <p className="mt-1 font-semibold text-emerald-600">
                    Total: ৳{totalPrice}
                </p>
            </div>
        </div>
    );
};

export default AddToCut;