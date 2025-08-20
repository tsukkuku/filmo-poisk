import toast from "react-hot-toast";

export const showToast = (message: string) => {
  toast.dismiss();
  toast.success(message);
};
