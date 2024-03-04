import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editar } from '../../store/reducers/contatos'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { deletar } from '../../store/reducers/contatos'
import { Campo } from '../../styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  categoria,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  console.log(estaEditando)

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        nome,
        email,
        telefone,
        categoria,
        id: id
      })
    )
    setEstaEditando(false)
  }

  function alteraTelefone(event: { target: { value: any } }) {
    setTelefone(event.target.value)
  }

  console.log(estaEditando)
  return (
    <>
      <S.Card categoria={categoria}>
        <S.Inner className="inner">
          <S.Front>
            <S.Avatar
              categoria={categoria}
              src="https://placehold.co/150"
              alt=""
            />
            <S.Nome categoria={categoria}>{nome}</S.Nome>
            <S.Texto>Hover para mais informações</S.Texto>
          </S.Front>
          <S.Back className="back">
            <S.DivNome categoria={categoria}>
              <S.Nome categoria={categoria}>
                {estaEditando ? 'Editando:' + `${nome}` : `${nome}`}
              </S.Nome>
            </S.DivNome>
            <S.DivTexto>
              <S.Label categoria={categoria}>
                {estaEditando ? 'Nome:' : 'Categoria:'}
              </S.Label>
              <S.Texto>
                {estaEditando ? (
                  <>
                    <S.Campo
                      placeholder={nome}
                      onChange={(evento: { target: { value: string } }) =>
                        setNome(evento.target.value)
                      }
                    />
                  </>
                ) : (
                  `${categoria}`
                )}
              </S.Texto>
              <S.Label categoria={categoria}>E-mail:</S.Label>
              <S.Texto>
                {estaEditando ? (
                  <>
                    <S.Campo
                      placeholder={email}
                      onChange={(evento: { target: { value: string } }) =>
                        setEmail(evento.target.value)
                      }
                    />
                  </>
                ) : (
                  `${email}`
                )}
              </S.Texto>
              <S.Label categoria={categoria}>Telefone:</S.Label>
              <S.Texto>
                {' '}
                {estaEditando ? (
                  <>
                    <S.Campo onChange={alteraTelefone} />
                  </>
                ) : (
                  `${telefone}`
                )}
              </S.Texto>
            </S.DivTexto>
            <S.DivBotao>
              {estaEditando ? (
                <>
                  <S.BotaoSalvar categoria={categoria} onClick={salvarEdicao}>
                    Salvar
                  </S.BotaoSalvar>
                  <S.BotaoCancelarRemover
                    categoria={categoria}
                    onClick={cancelarEdicao}
                  >
                    Cancelar
                  </S.BotaoCancelarRemover>
                </>
              ) : (
                <>
                  <S.BotaoEditar
                    categoria={categoria}
                    onClick={() => setEstaEditando(true)}
                  >
                    Editar
                  </S.BotaoEditar>
                  <S.BotaoCancelarRemover
                    categoria={categoria}
                    onClick={() => dispatch(deletar(id))}
                  >
                    Deletar
                  </S.BotaoCancelarRemover>
                </>
              )}
            </S.DivBotao>
          </S.Back>
        </S.Inner>
      </S.Card>
    </>
  )
}

export default Contato
