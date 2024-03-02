import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

export const Card = styled.div<Props>`
  padding: 8px;
  background-color: ${variaveis.cordefundo}
  color: ${(props) =>
    props.criterio == 'amigos'
      ? '#f48020'
      : props.criterio == 'familia'
      ? '#f72585'
      : props.criterio == 'trabalho'
      ? '#f6e837'
      : `${variaveis.corPrincipal}`};
  cursor: pointer;
`
export const Input = styled.input`
  display: block;
  align-itens: center;
`

export const Label = styled.label<Props>`
  font-size: 14px;
  color: ${(props) =>
    props.criterio == 'amigos'
      ? '#f48020'
      : props.criterio == 'familia'
      ? '#f72585'
      : props.criterio == 'trabalho'
      ? '#f6e837'
      : `${variaveis.corPrincipal}`};
  cursor: pointer;
`
