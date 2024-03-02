import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import { MainContainer } from './styles'
import * as enums from '../../uteis/index'
import FiltroCard from '../../components/FiltroCard'

export type Props = {
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
  valor?: enums.Categoria
}

const Filtro = ({ criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { ativo } = useSelector((state: RootReducer) => state.menu)

  const estado = ativo
  return (
    <>
      <S.Ativo className={estado}>
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
            <FiltroCard valor={enums.Categoria.TODOS} criterio="todos" />
          </S.Filtros>
        </MainContainer>
      </S.Ativo>
    </>
  )
}

export default Filtro
