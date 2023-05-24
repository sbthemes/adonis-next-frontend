import { forwardRef, ReactNode, Ref, useImperativeHandle, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import IconClose from './Icon/IconClose';

interface SheetProps {
    children: ReactNode;
    width?: string;
    button?: ReactNode;
}

export type SheetHandle = {
    open: () => void;
    close: () => void;
};

const Sheet = forwardRef(({ children, width, button }: SheetProps, ref: Ref<SheetHandle>) => {
    const [open, setOpen] = useState(false);

    const openSheet = () => {
        setOpen(true);
    };

    const closeSheet = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            openSheet();
        },
        close() {
            closeSheet();
        },
    }));

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {button && <Dialog.Trigger asChild>{button}</Dialog.Trigger>}
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/50 fixed inset-0 z-20 transition-all duration-400 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out">
                    <Dialog.Content
                        className="w-full h-screen absolute overflow-y-auto right-0 bg-white shadow-lg p-6 outline-none animate-in slide-in-from-right duration-300"
                        style={{ maxWidth: width || '432px' }}
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

Sheet.displayName = 'Sheet';
export default Sheet;
