import ReactDOM from 'react-dom';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import IconClose from '@/components/Icon/IconClose';

const Modal = ({ children, width }, forwardedRef) => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const modalPanelRef = useRef();

    const openModal = () => {
        setIsOpen(true);
        document.addEventListener('mousedown', handleDocumentClick);
        document.addEventListener('keydown', handleEscKey);
    };

    const closeModal = () => {
        setIsOpen(false);
        document.removeEventListener('mousedown', handleDocumentClick);
        document.removeEventListener('keydown', handleDocumentClick);
    };

    const handleDocumentClick = (event) => {
        if (modalPanelRef?.current?.contains(event.target)) {
            return;
        }

        closeModal();
    };

    const handleEscKey = (e) => {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            closeModal();
        }
    };

    useImperativeHandle(forwardedRef, () => ({
        open() {
            openModal();
        },
        close() {
            closeModal();
        },
    }));

    return (
        <>
            {mounted &&
                ReactDOM.createPortal(
                    isOpen && (
                        <>
                            <div className="fixed inset-0 z-50 bg-black/70"></div>
                            <div className="fixed inset-0 z-50 overflow-y-auto">
                                <div className=" z-50 flex min-h-full items-center justify-center p-4 text-center">
                                    <div
                                        ref={modalPanelRef}
                                        className="relative w-full rounded-md bg-white p-7 text-left align-middle shadow-xl transition-all"
                                        style={{ maxWidth: width || '400px' }}
                                    >
                                        <button
                                            tabIndex="-1"
                                            type="button"
                                            className="absolute -top-5 right-0 text-white"
                                            onClick={closeModal}
                                        >
                                            <IconClose className="text-white" />
                                        </button>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </>
                    ),
                    document.querySelector('#modal-portal')
                )}
        </>
    );
};

export default forwardRef(Modal);
