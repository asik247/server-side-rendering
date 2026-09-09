import Link from "next/link";
import FeedBackCard from "../Components/FeedBackRelative/FeedBackCard";

const getData = async () => {
    const res = await fetch(
        "http://localhost:3000/api/reviews",
        {
            cache:'force-cache',
            next: {
                revalidate: 60,
            },
        }
    );

    return res.json();
};

const FeedBack = async () => {
    const feedback = await getData();

    return (
        <div>
            <p className="text-2xl text-center font-bold">
                All{" "}
                <span className="text-green-600 font-extrabold">
                    {feedback.length}
                </span>{" "}
                Feedbacks Here
            </p>

            <div className="text-center mt-5">
                <Link
                    className="text-green-600 font-extrabold"
                    href="/feedback/addfeedback"
                >
                    Add Your Feedback
                </Link>
            </div>

            <div className="max-w-7xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedback.map((fd) => (
                    <FeedBackCard key={fd._id} fd={fd} />
                ))}
            </div>
        </div>
    );
};

export default FeedBack;