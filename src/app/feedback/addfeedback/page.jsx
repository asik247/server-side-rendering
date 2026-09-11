'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const AddFeedback = () => {
    //? router usign.
    const router = useRouter();

    const handlerAddFeedBack = async (e) => {
        e.preventDefault();

        const message = e.target.feedbackMessage.value;
        // ? this message post revies collection.
        //Todo just 1 line code inserted data in db.
        const res = await fetch(`${process.env.NEXT_PUBLIC_url}/api/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ message })

        })
        const data = await res.json();
        // console.log(data);
        if (data?.insertedId) {
            alert(message)
            //? successfully inserted data then rote feedback page.
            router.push("/feedback")

        }

    }
    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6 border">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Share Your Feedback
                </h2>
                <p className="text-gray-500 mb-5">
                    We'd love to hear your thoughts about our service.
                </p>

                <form onSubmit={handlerAddFeedBack} className="space-y-4">
                    <textarea
                        name="feedbackMessage"
                        rows={6}
                        placeholder="Write your feedback here..."
                        className="w-full text-black p-4 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 cursor-pointer py-3 bg-emerald-500 text-white font-medium rounded-xl hover:bg-emerald-600 transition duration-300"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFeedback;