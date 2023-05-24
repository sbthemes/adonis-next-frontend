import Axios from 'axios';
import { getCookie } from './cookie';
import toast from './toast';

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use((config) => {
    const token = getCookie('auth.__token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

axios.interceptors.response.use(
    (response) => {
        if (response?.data) {
            if (response.data?.success) {
                toast.success(response.data.success);
            }

            if (response.data?.error) {
                toast.error(response.data.error);
            }
        }
        return response;
    },
    (error) => {
        if (error?.response?.status !== 401 && error?.response?.data?.errors) {
            const obj = error.response.data.errors;
            if (obj.length) {
                toast.error(obj[0].message);
            }
        }

        if (error?.response?.data?.error) {
            toast.error(error.response.data.error);
        }

        if (error?.response?.status !== 401 && error?.response?.data?.message) {
            toast.error(error.response.data.message);
        }

        return Promise.reject(error);
    }
);

export default axios;
