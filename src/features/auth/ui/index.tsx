import { useEffect, useState } from "react";
import { useModal } from "@/shared/lib";
import { Modal } from "@/shared/ui";
import { YandexAuth } from "../yandex";
import { GoogleAuth } from "../google";
import { IoClose } from "react-icons/io5";

export const AuthModal = () => {
  const { isOpen, close } = useModal();

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setIsShow(true);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      title="Авторизация"
      closeIcon={<IoClose size={30} />}
    >
      {isShow && <GoogleAuth />}
      <YandexAuth setIsShow={setIsShow} />
    </Modal>
  );
};
