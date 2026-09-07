"use client"
import { context } from '@/ContextApi/ContextProvider';
// import { context } from '@/ContextApi/ContextProvider';
import React, {  use, useState } from 'react';

const AddToCutBtn = ({food}) => {
    const [added, setAdded] = useState(false);
    // const {addToCut} = use(context);
    const {addToCuts} = use(context);

    
    const handlerSomething = ()=>{
        // alert("Add to cut btn clicked")
        // addToCut(food)
        addToCuts(food)
        setAdded(true)
    }
    return (
        <button
            onClick={handlerSomething}
            className={`${added?"text-green-600":"text-gray-600"}`}
            
          >

         <span>{added?"Done AddToCut":"AddToCut"}</span>
        </button>
    );
};

export default AddToCutBtn;
/**
 * "use client";
import React, { useState } from "react";

const AddToCartBtn = () => {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(!added)}
      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95 ${
        added
          ? "bg-rose-50 text-rose-600 border border-rose-200 shadow-rose-500/10 hover:bg-rose-100"
          : "bg-emerald-600 text-white shadow-emerald-500/20 hover:bg-emerald-500"
      }`}
    >
      {added ? (
        // কার্টে অ্যাড থাকলে চেকমার্ক আইকন
        <svg
          className="h-4 w-4 stroke-current stroke-2 fill-none animate-in zoom-in-75 duration-200"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        // ডিফল্ট কার্ট আইকন
        <svg
          className="h-4 w-4 stroke-current stroke-2 fill-none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      )}

     
      <span>{added ? "Added to Cart" : "Add to Cart"}</span>
    </button>
  );
};

export default AddToCartBtn;
 */
