import nookies from 'nookies';

export const setCookie = (
    key,
    value,
    ctx = null,
    args = {
        maxAge: 31536000,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
    }
) => {
    nookies.set(ctx, key, value, args);
};

export const getCookie = (key, ctx = null) => {
    return nookies.get(ctx)[key];
};

export const destroyCookie = (key, ctx = null) => {
    return nookies.destroy(ctx, key);
};
