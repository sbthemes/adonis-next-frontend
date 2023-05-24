import { ReactNode } from 'react';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return <>{children}</>;
};

export default DefaultLayout;
