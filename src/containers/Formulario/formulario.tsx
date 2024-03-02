import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as enums from '../../uteis/index'
import * as S from './styles'
import { Campo, ContainerPrincipal } from '../../styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.AMIGOS)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        categoria,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <>
      <ContainerPrincipal>
        <S.Conteudo>
          <S.Titulo>Cadastrar novo contato</S.Titulo>
          <S.Form onSubmit={cadastrarContato}>
            <Campo
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              type="text"
              placeholder="nome"
            />
            <br />
            <Campo
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              type="email"
              placeholder="email"
            />
            <br />
            <Campo
              value={telefone}
              onChange={(evento) => setTelefone(parseInt(evento.target.value))}
              type="number"
              placeholder="telefone"
            />
            <br />
            <S.Opcoes>
              <S.Texto>CATEGORIA</S.Texto>
              {Object.values(enums.Categoria).map((categoria) => (
                <S.Opcao key={categoria}>
                  <input
                    value={categoria}
                    name="categoria"
                    type="radio"
                    id={categoria}
                    onChange={(evento) =>
                      setCategoria(evento.target.value as enums.Categoria)
                    }
                    defaultChecked={categoria === enums.Categoria.AMIGOS}
                  />
                  {''}
                  <label htmlFor={categoria}>{categoria}</label>
                </S.Opcao>
              ))}
            </S.Opcoes>
            <S.DivBotao>
              <S.Botao type="submit">Cadastrar</S.Botao>
              <S.botao2 to="/">Voltar</S.botao2>
            </S.DivBotao>
          </S.Form>
        </S.Conteudo>
      </ContainerPrincipal>
    </>
  )
}

export default Formulario
