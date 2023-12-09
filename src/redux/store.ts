import { persistStore } from "redux-persist";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);