import axios from '@/libs/axios';
import { destroyCookie } from '@/libs/cookie';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'loading',
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
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

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/auth/user');
            dispatch(setUser(data.user));
        } catch {
            dispatch(setLogout());
        }
    };
};

export const { setUser, setStatus, setLogout } = authSlice.actions;
export default authSlice.reducer;
