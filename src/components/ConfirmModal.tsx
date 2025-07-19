import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
}: ConfirmModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) {
    return null;
  }

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    console.error("The element with id 'modal-root' was not found in the DOM.");
    return null;
  }

  return createPortal(
    <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/50">
      {/* 모달 컨텐츠 */}
      <div className="p-4 mx-4 w-full max-w-sm bg-white rounded-lg shadow-lg">
        {/* 제목 */}
        <h2 className="text-lg font-normal text-center text-gray-700">
          {title}
        </h2>

        {/* 구분선 */}
        <hr className="my-2 border-t border-gray-300 border-dashed" />

        {/* 메시지 */}
        <div className="my-6 text-center text-gray-700">{children}</div>

        {/* 버튼 컨테이너 */}
        <div className="grid grid-cols-2 gap-3 text-gray-400">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 transition hover:bg-gray-100"
          >
            {t("button_cancel")}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg border border-gray-300 transition hover:bg-gray-100"
          >
            {t("button_confirm")}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ConfirmModal;
