import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type MenuState = {
  ativo: boolean
}

const initialState: MenuState = {
  ativo: false
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    mostraFiltro: (state, action: PayloadAction<boolean>) => {
      state.ativo = action.payload
    }
  }
})

export const { mostraFiltro } = menuSlice.actions

export default menuSlice.reducer
