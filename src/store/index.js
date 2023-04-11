import { createStore } from 'redux'
import { reducer } from './reducers/card.reducer'

const RootReducer = reducer

export default createStore(RootReducer);