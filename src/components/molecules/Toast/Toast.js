import { toast } from 'react-toastify';

const defaultToastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const toastError = (text) => toast.error(text, defaultToastConfig );
const toastSuccess = (text) => toast.success(text, defaultToastConfig );
const toastInfo = (text) => toast.info(text, defaultToastConfig );

export {
  toastError,
  toastSuccess,
  toastInfo
}