import { rootReducer } from "./root-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
} from 'redux-persist';


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);