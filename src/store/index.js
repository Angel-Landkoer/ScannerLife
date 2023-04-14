import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const configPersist = {
  key: "root",
  storage: AsyncStorage
}

import { reducer } from './reducers/card.reducer'

const RootReducer = reducer

const persistedReducer = persistReducer(configPersist, RootReducer)


export const store = createStore(persistedReducer)

export const storePersisted = persistStore(store)