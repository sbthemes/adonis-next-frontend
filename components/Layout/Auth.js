import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const Auth = ({ children, verify: verificationRequired }) => {
    const router = useRouter();
    const { status, user } = useSelector((state) => state.auth);
    const isVerified = user?.email_verified_at;

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        } else if (status === 'authenticated' && verificationRequired === true && !isVerified) {
            router.push('/account/verify');
        } else if (status === 'authenticated' && verificationRequired === false && isVerified) {
            router.push('/');
        }
    }, [status, router, verificationRequired, isVerified]);

    if (status !== 'authenticated' || (verificationRequired === true && !isVerified)) {
        return <Loading />;
    }

    return children;
};

export default Auth;
