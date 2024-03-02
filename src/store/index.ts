import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'
import menuReducer from './reducers/menu'

const store = configureStore({
  reducer: {
    contatos: contatoReducer,
    filtro: filtroReducer,
    menu: menuReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
