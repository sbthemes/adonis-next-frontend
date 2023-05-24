import { default as notification } from 'react-hot-toast';

const toast = {
    success: (message: string) => {
        notification.dismiss();
        notification.success(message);
    },
    error: (message: string) => {
        notification.dismiss();
        notification.error(message);
    },
};

export default toast;
