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
      <S.Card criterio={categoria}>
        <S.Inner className="inner">
          <S.Front>
            <S.Avatar
              criterio={categoria}
              src="https://placehold.co/150"
              alt=""
            />
            <S.Nome criterio={categoria}>{nome}</S.Nome>
            <S.Texto>Hover para mais informações</S.Texto>
          </S.Front>
          <S.Back className="back">
            <S.DivNome criterio={categoria}>
              <S.Nome criterio={categoria}>
                {estaEditando ? 'Editando:' + `${nome}` : `${nome}`}
              </S.Nome>
            </S.DivNome>
            <S.DivTexto>
              <S.Label criterio={categoria}>
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
              <S.Label criterio={categoria}>E-mail:</S.Label>
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
              <S.Label criterio={categoria}>Telefone:</S.Label>
              <S.Texto>
                {' '}
                {estaEditando ? (
                  <>
                    <S.Campo placeholder={telefone} onChange={alteraTelefone} />
                  </>
                ) : (
                  `${telefone}`
                )}
              </S.Texto>
            </S.DivTexto>
            <S.DivBotao>
              {estaEditando ? (
                <>
                  <S.BotaoSalvar criterio={categoria} onClick={salvarEdicao}>
                    Salvar
                  </S.BotaoSalvar>
                  <S.BotaoCancelarRemover
                    criterio={categoria}
                    onClick={cancelarEdicao}
                  >
                    Cancelar
                  </S.BotaoCancelarRemover>
                </>
              ) : (
                <>
                  <S.BotaoEditar
                    criterio={categoria}
                    onClick={() => setEstaEditando(true)}
                  >
                    Editar
                  </S.BotaoEditar>
                  <S.BotaoCancelarRemover
                    criterio={categoria}
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
