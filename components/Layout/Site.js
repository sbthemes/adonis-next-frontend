import Auth from '@/components/Layout/Auth';
import NoAuth from '@/components/Layout/NoAuth';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import NoSidebarLayout from '@/components/Layout/NoSidebarLayout';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const Site = ({ children, middleware, layout }) => {
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
