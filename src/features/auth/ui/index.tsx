import { useEffect, useState } from "react";
import { useModal } from "@/shared/lib";
import { Modal } from "@/shared/ui";
import { YandexAuth } from "../yandex";
import { GoogleAuth } from "../google";

export const AuthModal = () => {
  const { isOpen, close } = useModal();

  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      setIsShow(true);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={close} title="Авторизация">
      {isShow && <GoogleAuth />}
      <YandexAuth setIsShow={setIsShow} />
    </Modal>
  );
};
