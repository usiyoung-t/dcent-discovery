import { useTranslation } from "react-i18next";
import Divider from "../ui/Divider";
import DappItem from "../ui/DappItem";
import { BookMarkButton } from "../ui/BookMark";
import type { Dapp } from "../../api/dapps";
import { type MouseEvent, useEffect, useMemo, useState } from "react";
import useDapps from "../../hooks/useDapps";
import ConfirmModal from "../ui/ConfirmModal";
import DappDetailSheet from "./DappDetailSheet";
import { useAppContext } from "../../context/useAppContext";

const DappSection = () => {
  const { t } = useTranslation();
  const { lang } = useAppContext();
  const [selectedDapp, setSelectedDapp] = useState<Dapp | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const { data: dappInfo, isLoading, error, deleteFavorite } = useDapps();

  const { favorites, dapps } = useMemo(() => {
    if (!dappInfo) {
      return { favorites: [], dapps: [] };
    }

    const favoriteSet = new Set(dappInfo.favoriteIds);
    const favoritesList: Dapp[] = [];
    const dappsList: Dapp[] = [];

    dappInfo.dapps.forEach((dapp) => {
      if (favoriteSet.has(dapp.id)) {
        favoritesList.push(dapp);
      } else {
        dappsList.push(dapp);
      }
    });

    return { favorites: favoritesList, dapps: dappsList };
  }, [dappInfo]);

  useEffect(() => {
    if (selectedDapp) {
      setIsDetailOpen(false);
    }
  }, [lang]);

  const handleDappClick = (dapp: Dapp) => {
    setSelectedDapp(dapp);
    setIsDetailOpen(true);
  };

  return (
    <>
      {!isLoading && !error ? (
        <div className="relative p-5 px-6 mt-4">
          {favorites.length > 0 && (
            <section className="mb-8">
              <span className="text-lg font-normal text-gray-600">
                {t("dapp_favorite_title")}
              </span>
              <Divider />

              {favorites.map((dapp) => (
                <div key={dapp.id}>
                  <DappItem
                    name={dapp.name}
                    iconUrl={dapp.iconUrl}
                    description={dapp.linkUrl}
                    onClick={() => handleDappClick(dapp)}
                  >
                    <BookMarkButton
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        setSelectedDapp(dapp);
                        setIsOpen(true);
                      }}
                    />
                  </DappItem>
                  <Divider />
                </div>
              ))}
            </section>
          )}

          <section>
            <span className="text-lg font-normal text-gray-600">
              {t("dapp_list_title")}
            </span>

            <Divider />
            {dapps.map((dapp) => (
              <div key={dapp.id}>
                <DappItem
                  name={dapp.name}
                  iconUrl={dapp.iconUrl}
                  description={dapp.description}
                  onClick={() => handleDappClick(dapp)}
                />
                <Divider />
              </div>
            ))}
          </section>
        </div>
      ) : (
        <DappSectionSkeleton />
      )}

      <ConfirmModal
        isOpen={isOpen}
        title={t("dapp_favorite_title") + " " + t("dapp_favorite_delete")}
        children={<p>{t("dapp_favorite_delete_confirm")}</p>}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          if (selectedDapp) {
            deleteFavorite(selectedDapp.id);
          }
          setIsOpen(false);
        }}
      />

      <DappDetailSheet
        isOpen={isDetailOpen}
        dapp={selectedDapp}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
};

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

export default DappSection;
