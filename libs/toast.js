import { toast as notify } from 'react-hot-toast';

const toast = {
    success: (message) => {
        notify.remove();
        notify.custom(
            <div className="toast-notification toast-success" onClick={() => notify.remove()}>
                {message}
            </div>,
            {
                className: 'toast-notification toast-success',
            }
        );
    },
    error: (message) => {
        notify.remove();
        notify.custom(
            <div className="toast-notification toast-error" onClick={() => notify.remove()}>
                {message}
            </div>,
            {
                className: 'toast-notification toast-error',
            }
        );
    },
};

export default toast;
