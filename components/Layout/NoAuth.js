import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const NoAuth = ({ children }) => {
    const { status } = useSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [status, router]);

    return children;
};

export default NoAuth;
