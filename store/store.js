import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default configureStore({
    reducer: rootReducer,
});
