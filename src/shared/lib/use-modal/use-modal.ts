import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { openModal, closeModal } from "../../ui/Modal/model";

export const useModal = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const open = () => dispatch(openModal());
  const close = () => dispatch(closeModal());

  return { isOpen, open, close };
};
