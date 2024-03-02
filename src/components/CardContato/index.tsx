import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { useDispatch } from 'react-redux'
import { deletar } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, categoria, id }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Card categoria={categoria}>
      <S.Inner className="inner">
        <S.Front>
          <S.Avatar src="https://placehold.co/150" alt="" />
          <S.Nome categoria={categoria}>{nome}</S.Nome>
          <S.Texto>Hover para mais informações</S.Texto>
        </S.Front>
        <S.Back className="back">
          <S.DivNome>
            <S.Nome categoria={categoria}>{nome}</S.Nome>
          </S.DivNome>
          <S.DivTexto>
            <S.Texto>{categoria}</S.Texto>
            <S.Texto>{email}</S.Texto>
            <S.Texto>{telefone}</S.Texto>
          </S.DivTexto>
          <S.DivBotao>
            <S.Botao>Editar</S.Botao>
            <S.Botao onClick={() => dispatch(deletar(id))}>Deletar</S.Botao>
          </S.DivBotao>
        </S.Back>
      </S.Inner>
    </S.Card>
  )
}

export default Contato
