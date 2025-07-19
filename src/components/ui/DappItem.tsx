import type { ReactNode } from "react";
import { DAPP_ICON_URL } from "../../constants";

const DappItem = ({
  name,
  iconUrl,
  description,
  children,
  onClick,
}: {
  name: string;
  iconUrl: string;
  description: string;
  children?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex items-center py-4 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex-shrink-0 mr-4 rounded-lg shadow-md">
        <img
          className="rounded-md"
          src={DAPP_ICON_URL + iconUrl}
          width={90}
          height={90}
          alt={name}
        />
      </div>

      <div className="flex-grow min-w-0">
        <div className="mb-1 text-3xl font-normal text-gray-800 truncate">
          {name}
        </div>
        <span className="text-lg font-normal text-gray-700 line-clamp-1">
          {description}
        </span>
      </div>

      <div className="flex-shrink-0 ml-4">{children}</div>
    </div>
  );
};

export default DappItem;
