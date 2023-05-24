import { forwardRef, ReactNode, Ref, useImperativeHandle, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import IconClose from './Icon/IconClose';

interface ModalProps {
    children: ReactNode;
    width?: string;
    button?: ReactNode;
}

export type ModalHandle = {
    open: () => void;
    close: () => void;
};

const Modal = forwardRef(({ children, width, button }: ModalProps, ref: Ref<ModalHandle>) => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            openModal();
        },
        close() {
            closeModal();
        },
    }));

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {button && <Dialog.Trigger asChild>{button}</Dialog.Trigger>}
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 fixed inset-0 z-20 p-4 overflow-y-auto grid place-items-center transition-all duration-400 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out">
                    <Dialog.Content
                        className="w-full rounded relative bg-white shadow-lg p-6 outline-none animate-in data-[state=open]:fade-in-90 slide-in-from-bottom-2"
                        style={{ maxWidth: width || '400px' }}
                    >
                        <div>{children}</div>
                        <Dialog.Close asChild>
                            <button
                                className="outline-none absolute top-2 right-2 w-6 h-6 flex items-center justify-center"
                                aria-label="Close"
                            >
                                <IconClose className="text-black w-5 h-5" />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root>
    );
});

Modal.displayName = 'Modal';
export default Modal;
