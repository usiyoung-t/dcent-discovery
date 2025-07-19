import Divider from "../ui/Divider";
import DappItemSkeleton from "./DappItemSkeleton";

const DappSectionSkeleton = () => (
  <div className="relative p-5 px-6 mt-4 animate-pulse">
    <section className="mb-8">
      <div className="mb-2 w-1/3 h-6 bg-gray-300 rounded"></div>
      <Divider />

      {Array.from({ length: 2 }).map((_, i) => (
        <DappItemSkeleton key={`fav-skel-${i}`} />
      ))}
    </section>

    <section>
      <div className="mb-3 w-1/3 h-6 bg-gray-300 rounded"></div>
      <Divider />
      {Array.from({ length: 10 }).map((_, i) => (
        <DappItemSkeleton key={`dapp-skel-${i}`} />
      ))}
    </section>
  </div>
);

export default DappSectionSkeleton;
