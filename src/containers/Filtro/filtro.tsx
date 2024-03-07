import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { MainContainer } from './styles'
import * as enums from '../../uteis/index'
import FiltroCard from '../../components/FiltroCard'
import { useState } from 'react'

export type Props = {
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
  valor?: enums.Categoria
}

const Filtro = ({ criterio }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { ativo: valorAtual } = useSelector((state: RootReducer) => state.menu)
  const [ativo, setAtivo] = useState(valorAtual)

  const estado = ativo
  console.log(ativo)

  return (
    <>
      <S.Ativo className={estado === true ? 'isActive' : 'isInactive'}>
        <MainContainer>
          <S.Campo
            type="text"
            placeholder="Buscar"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
          />
          <S.Filtros>
            <FiltroCard valor={enums.Categoria.FAMILIA} criterio="familia" />
            <FiltroCard valor={enums.Categoria.TRABALHO} criterio="trabalho" />
            <FiltroCard valor={enums.Categoria.AMIGOS} criterio="amigos" />
            <FiltroCard criterio="todos" />
          </S.Filtros>
        </MainContainer>
      </S.Ativo>
    </>
  )
}

export default Filtro
