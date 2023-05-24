import NoAuth from '@/components/Layout/NoAuth';
import { ReactNode, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import NoSidebarLayout from '@/components/Layout/NoSidebarLayout';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Auth from './Auth';

interface SiteProps {
    children: ReactNode;
    layout?: 'default' | 'nosidebar';
    middleware?: {
        auth?: boolean;
        verify?: boolean;
    };
}

const Site = ({ children, middleware, layout }: SiteProps) => {
    const { fetchUser } = useAuth();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <>
            {layout === 'nosidebar' && (
                <NoSidebarLayout>
                    {middleware?.auth === true ? (
                        <Auth verify={middleware?.verify}>{children}</Auth>
                    ) : middleware?.auth === false ? (
                        <NoAuth>{children}</NoAuth>
                    ) : (
                        children
                    )}
                </NoSidebarLayout>
            )}
            {layout === 'default' && (
                <DefaultLayout>
                    {middleware?.auth === true ? (
                        <Auth verify={middleware?.verify}>{children}</Auth>
                    ) : middleware?.auth === false ? (
                        <NoAuth>{children}</NoAuth>
                    ) : (
                        children
                    )}
                </DefaultLayout>
            )}
        </>
    );
};

export default Site;
