import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import toastReducer from './toastSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    toast: toastReducer,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
