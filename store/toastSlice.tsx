import { destroyCookie } from '@/libs/cookie';
import { createSlice, Dispatch } from '@reduxjs/toolkit';

interface ToastSliceState {
    status: string;
    user: any;
}

const initialState = {
    status: 'loading',
    user: null,
} as ToastSliceState;

const toastSlice = createSlice({
    name: 'toast',
    initialState,
    reducers: {
        setStatus(state, { payload }) {
            state.status = payload;
        },

        setUser(state, { payload }) {
            state.user = payload;
            state.status = 'authenticated';
        },

        setLogout(state) {
            destroyCookie('auth.__token');
            state.user = null;
            state.status = 'unauthenticated';
        },
    },
});

export const { setUser, setStatus, setLogout } = toastSlice.actions;
export default toastSlice.reducer;
