import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Menu = () => {
  const { ativo } = useSelector((state: RootReducer) => state.menu)

  const [display, setDisplay] = useState(ativo)

  const alteraDisplay = () => {
    const ativo = display
    if (ativo === 'isActive') {
      setDisplay('isInactive')
    } else if (ativo === 'isInactive') {
      setDisplay('isActive')
      console.log(ativo)
    }
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
                {ativo === 'isActive' ? 'remover filtro' : 'mostrar filtro'}
              </S.Botao2>
            </S.Item>
          </S.Lista>
        </S.Menu>
      </S.Cabecalho>
    </>
  )
}

export default Menu
