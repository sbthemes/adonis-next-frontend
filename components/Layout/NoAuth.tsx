import { IRootState } from '@/store/store';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface NoAuthProps {
    children: ReactNode;
}

const NoAuth = ({ children }: NoAuthProps): JSX.Element => {
    const { status } = useSelector((state: IRootState) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status, router]);

    return <>{children}</>;
};

export default NoAuth;
