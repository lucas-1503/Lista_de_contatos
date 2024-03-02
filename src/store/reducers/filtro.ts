import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../uteis/index'

type FiltroState = {
  termo?: string
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
  valor?: enums.Categoria
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions

export default filtroSlice.reducer
