import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import User from './reducers/User'

const rootReducer = combineReducers({
    user: User,
})

const configuration = {
    key:"root",
    storage: AsyncStorage,
    version: 1,
}

const persistedReducer = persistReducer(configuration, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({serializableCheck: false}).concat(logger)
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;

export const persistor = persistStore(store)
