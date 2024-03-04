import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'

const Menu = () => {
  const { ativo } = useSelector((state: RootReducer) => state.menu)
  const [display, setDisplay] = useState(false)

  // const alteraDisplay = () => {
  //   const ativo = display
  //   if (ativo === 'isActive') {
  //     setDisplay('isInactive')
  //   } else if (ativo === 'isInactive') {
  //     setDisplay('isActive')
  //   }
  // }

  return (
    <>
      <S.Cabecalho>
        <S.Menu>
          <S.Lista>
            <S.Item>
              <S.Botao to="/novo">Cadastrar</S.Botao>
            </S.Item>
            <S.Item>
              <S.Botao2
                onClick={
                  display === false
                    ? () => setDisplay(true)
                    : () => setDisplay(false)
                }
              >
                {display === false ? 'mostrar filtro' : 'remover filtro'}
              </S.Botao2>
            </S.Item>
          </S.Lista>
        </S.Menu>
      </S.Cabecalho>
    </>
  )
}

export default Menu
