import { ReactNode } from 'react';
import * as ReactPopover from '@radix-ui/react-popover';

interface ModalProps {
    children: ReactNode;
    width?: string;
    button: ReactNode;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
    alignOffset?: number;
}

const Popover = ({ children, width, button, align, sideOffset, alignOffset }: ModalProps) => (
    <ReactPopover.Root>
        {button && <ReactPopover.Trigger asChild>{button}</ReactPopover.Trigger>}
        <ReactPopover.Portal>
            <ReactPopover.Content
                className="rounded p-5 bg-white shadow border border-black/10"
                style={{ width: width || '160px' }}
                sideOffset={sideOffset || 5}
                alignOffset={alignOffset || 0}
                align={align || 'end'}
            >
                {children}
            </ReactPopover.Content>
        </ReactPopover.Portal>
    </ReactPopover.Root>
);

export default Popover;
