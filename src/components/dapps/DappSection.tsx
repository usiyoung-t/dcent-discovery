import { useTranslation } from "react-i18next";
import Divider from "../ui/Divider";
import DappItem from "../ui/DappItem";
import { BookMarkButton } from "../ui/BookMark";
import type { Dapp } from "../../api/dapps";
import { useMemo, useState } from "react";
import useDapps from "../../hooks/useDapps";
import ConfirmModal from "../ui/ConfirmModal";

const DappSection = () => {
  const { t } = useTranslation();

  const [selectedDappId, setSelectedDappId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: dappInfo,
    isLoading: isLoadingDapps,
    error: errorDapps,
    addFavorite,
    deleteFavorite,
  } = useDapps();

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

  if (isLoadingDapps) {
    return <div>Loading...</div>;
  }

  if (errorDapps) {
    return <div>Error: {errorDapps.message}</div>;
  }

  return (
    <>
      <div className="p-5 px-6 mt-4">
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
                >
                  <BookMarkButton
                    onClick={() => {
                      setSelectedDappId(dapp.id);
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
              />
              <Divider />
            </div>
          ))}
        </section>
      </div>

      <ConfirmModal
        isOpen={isOpen}
        title={t("dapp_favorite_title") + " " + t("dapp_favorite_delete")}
        children={<p>{t("dapp_favorite_delete_confirm")}</p>}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          if (selectedDappId) {
            deleteFavorite(selectedDappId);
          }
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default DappSection;
