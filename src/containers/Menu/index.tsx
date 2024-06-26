import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { mostraFiltro } from '../../store/reducers/menu'

const Menu = () => {
  const { ativo: valorAtual } = useSelector((state: RootReducer) => state.menu)
  const dispatch = useDispatch()

  function alteraDisplay() {
    dispatch(mostraFiltro(!valorAtual))
  }

  return (
    <>
      <S.Cabecalho>
        <S.Menu>
          <S.Lista>
            <S.Item>
              <S.Botao to="/novo">Cadastrar</S.Botao>
            </S.Item>
            <S.Item>
              <S.Botao2 onClick={alteraDisplay}>
                {valorAtual === false ? 'mostrar filtro' : 'remover filtro'}
              </S.Botao2>
            </S.Item>
          </S.Lista>
        </S.Menu>
      </S.Cabecalho>
    </>
  )
}

export default Menu
