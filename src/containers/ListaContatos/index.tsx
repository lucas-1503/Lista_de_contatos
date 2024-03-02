import { useSelector } from 'react-redux'
import Contato from '../../components/CardContato/index'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'amigos') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      } else if (criterio === 'familia') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      } else if (criterio === 'trabalho') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.categoria === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <S.Container>
      <S.Lista>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              nome={t.nome}
              categoria={t.categoria}
              email={t.email}
              telefone={t.telefone}
              id={t.id}
            />
          </li>
        ))}
      </S.Lista>
    </S.Container>
  )
}

export default ListaDeContatos
