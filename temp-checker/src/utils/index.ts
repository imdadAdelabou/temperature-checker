import { TypeOptions, toast } from "react-toastify";


const openToast = (message: string, type: TypeOptions) => {
  toast(message, { type });
};

export {openToast};