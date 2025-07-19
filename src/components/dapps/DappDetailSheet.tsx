import { type Dapp } from "../../api/dapps";
import { DAPP_ICON_URL } from "../../constants";
import { useTranslation } from "react-i18next";
import { CloseButton } from "../ui/icons/CloseButton";

interface DappDetailSheetProps {
  isOpen: boolean;
  dapp: Dapp | null;
  onClose: () => void;
}

const DappDetailSheet = ({ isOpen, dapp, onClose }: DappDetailSheetProps) => {
  const { t } = useTranslation();
  if (!isOpen || !dapp) {
    return null;
  }

  console.log(dapp);
  return (
    <div className="flex absolute inset-0 z-20 flex-col justify-end h-[140vh] bg-black/30">
      <div className="flex fixed bottom-0 flex-col p-8 w-[512px] h-[44vh] bg-white rounded-t-2xl shadow-xl">
        <div className="flex-shrink-0">
          <CloseButton onClick={onClose} />

          <div className="flex items-center">
            <img
              src={DAPP_ICON_URL + dapp.iconUrl}
              alt={dapp.name}
              className="w-20 h-20 rounded-lg"
            />
            <div className="ml-4 min-w-0">
              <h2 className="text-2xl font-bold">{dapp.name}</h2>
              <p className="text-base text-gray-400">
                {dapp.network?.join(", ")}
              </p>
            </div>
          </div>

          <p className="mt-2 text-base text-gray-900 truncate">
            {dapp.linkUrl}
          </p>
        </div>

        <div className="overflow-y-auto flex-grow mt-6">
          <h3 className="text-xl font-bold">Description</h3>
          <p className="mt-2 text-base font-normal text-gray-400">
            {dapp.description}
          </p>
        </div>

        {dapp?.linkUrl && (
          <div className="flex-shrink-0 pt-4">
            <a
              href={dapp.linkUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 w-full font-bold text-center text-white bg-green-500 rounded-full transition hover:bg-green-600"
            >
              {t("go_to_dapp")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DappDetailSheet;
