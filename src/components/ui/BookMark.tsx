import { useTranslation } from "react-i18next";
import BookmarkIcon from "./icons/BookmarkIcon";
import type { MouseEvent } from "react";

export const BookMarkButton = ({
  onClick,
}: {
  onClick: (e: MouseEvent) => void;
}) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-gray-400 cursor-pointer"
    >
      <BookmarkIcon className="w-5 h-8 text-gray-400" />
      <span className="mt-1 text-sm">{t("dapp_favorite_delete")}</span>
    </button>
  );
};
