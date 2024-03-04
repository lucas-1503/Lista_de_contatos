import { useDispatch } from 'react-redux'
import * as enums from '../../uteis/index'

import { alteraFiltro } from '../../store/reducers/filtro'
import * as S from './styles'

export type Props = {
  criterio: 'amigos' | 'familia' | 'trabalho' | 'todos'
  valor?: enums.Categoria
}

const FiltroCard = ({ criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }
  return (
    <S.Card criterio={criterio}>
      <S.Input
        type="radio"
        onClick={filtrar}
        name="criterio"
        value={criterio}
        id={criterio}
        defaultChecked={criterio === 'todos'}
      />
      <S.Label htmlFor={criterio} criterio={criterio}>
        {criterio}
      </S.Label>
    </S.Card>
  )
}

export default FiltroCard
