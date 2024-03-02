import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type MenuState = {
  ativo: string
}

const initialState: MenuState = {
  ativo: 'isActive'
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    mostraFiltro: (state, action: PayloadAction<string>) => {
      state.ativo = action.payload
    }
  }
})

export const { mostraFiltro } = menuSlice.actions

export default menuSlice.reducer
