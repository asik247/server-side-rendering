const FeedbackSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-5 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>

        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-20 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-300 rounded"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>

      <div className="flex gap-3 mt-5">
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default FeedbackSkeleton;