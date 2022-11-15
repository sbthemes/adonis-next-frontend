import { useDispatch } from 'react-redux';
import axios from '@/libs/axios';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from '@/libs/cookie';
import { fetchUser as getUser, setLogout } from '@/store/authSlice';
import { useCallback } from 'react';

export const useAuth = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const fetchUser = useCallback(() => {
        try {
            const token = getCookie('auth.__token');
            if (token) {
                dispatch(getUser());
            } else {
                dispatch(setLogout());
            }
        } catch {}
    }, [dispatch]);

    const login = async (args) => {
        try {
            const { data } = await axios.post('/auth/login', args);
            setCookie('auth.__token', data.token);
            await fetchUser();
        } catch {}
    };

    const register = async (args) => {
        try {
            await axios.post('/auth/register', args);
            await login({ email: args.email, password: args.password });
        } catch {}
    };

    const forgotPassword = async (args) => {
        try {
            await axios.post('/auth/password/forgot', args);
        } catch {}
    };

    const resetPassword = async (args) => {
        try {
            await axios.post(router.query.token, args);
            router.push('/login');
        } catch {}
    };

    const resendEmailVerification = async () => {
        try {
            await axios.post('/auth/email/verify/resend');
        } catch {}
    };

    const verifyEmail = async () => {
        try {
            await axios.get(router.query.token);
            await fetchUser();
        } catch {}
    };

    const logout = async () => {
        try {
            await axios.post('/auth/logout');
        } catch {}

        dispatch(setLogout());
    };

    return {
        fetchUser,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        verifyEmail,
        logout,
    };
};
