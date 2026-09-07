'use client'
import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react';

const InputField = () => {
    const router = useRouter();
    const params = useSearchParams();
    // console.log(params,router);
    const handlerSearch = (e)=>{
        e.preventDefault();
        const from = e.target;
        const searchValue = from.search.value;
        // ? newSearchParams generae.
        const newSearchParams = new URLSearchParams(params.toString());
        newSearchParams.set("search",searchValue);
        router.push(`?${newSearchParams.toString()}`)
        // console.log(searchValue);
    }
    return (
        <div className='my-5 text-center ' >
            <form onSubmit={handlerSearch}>
                <input type="text" name='search' placeholder='Searchs Here..' />
                <button className='ml-2 cursor-pointer text-yellow-500'>Searchs</button>
            </form>
        </div>
    );
};

export default InputField;