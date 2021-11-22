import { configureStore } from "@reduxjs/toolkit";
// import countReducer from '../reducers/countReducers'
// import toDoReducer from "../reducers/todoReducers";
import rootReducer from '../reducers/index'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
// tukar line ni to async storage

// const can only be defined after all the imports
const persistConfig = {
    key: 'root',
    version: 1,
    // version can be ignored
    storage: AsyncStorage,
    // tukar line ni to async storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    })
    let persistor = persistStore(store)

    export {store, persistor}

// this is day 7 mobile


