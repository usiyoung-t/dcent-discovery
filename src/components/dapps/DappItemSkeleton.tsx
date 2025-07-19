import Divider from "../ui/Divider";

const DappItemSkeleton = () => (
  <div className="py-2">
    <div className="flex items-center mb-3 w-full">
      <div className="mr-4 w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="w-1/2 h-5 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
    <Divider />
  </div>
);

export default DappItemSkeleton;
