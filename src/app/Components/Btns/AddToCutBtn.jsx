"use client"
import React from 'react';

const AddToCutBtn = () => {
    const handlerSomething = ()=>{
        alert("Add to cut btn clicked")
    }
    return (
        <button
            onClick={handlerSomething}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-500 active:scale-95"
        >
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
        </button>
    );
};

export default AddToCutBtn;