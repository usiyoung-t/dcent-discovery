const BannerSectionSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden h-48 bg-gray-800 animate-pulse">
        <div className="flex absolute inset-0 flex-col justify-center items-start p-5">
          <div className="mb-4 w-3/4 h-6 bg-gray-700 rounded"></div>

          <div className="w-32 h-10 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerSectionSkeleton;
