'use client'
import React, { useEffect, useState } from 'react';
import FeedBackCard from '../Components/FeedBackRelative/FeedBackCard';
import FeedBackLoading from '../Components/FeedBackRelative/FeedBackLoading';
// const getData = async()=>{
//     const res = await fetch("http://localhost:3000/api/reviews");
//     const data = await res.json();
//     return data
// }

const FeedBack = () => {
    // const feedback = await getData();
    // console.log(feedback);
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/api/reviews")
            .then(res => res.json())
            .then(data => {setFeedback(data),setLoading(false)})
    }, [])
     if(loading){
        return <FeedBackLoading></FeedBackLoading>
     }
    return (
        <div>


            <p className='text-2xl text-center font-bold'>All <span className='text-green-600 font-extrabold'>{(feedback.length)}</span> Feedbacks Here</p>
            <div className="max-w-7xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    feedback.map(fd => <FeedBackCard key={fd._id} fd={fd}></FeedBackCard>)
                }
            </div>
        </div>
    );
};

export default FeedBack;