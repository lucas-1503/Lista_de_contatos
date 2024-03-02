import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../uteis/index'

type Props = {
  categoria:
    | enums.Categoria.AMIGOS
    | enums.Categoria.FAMILIA
    | enums.Categoria.TRABALHO
    | 'todos'
}

export const Ativo = styled.div`
  &.isInactive {
    display: none;
  }
  &.isActive {
    display: flex;
  }
`
export const Campo = styled.input`
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 70%;
  margin-bottom: 8px;
  font-size: 18px;
  max-width: 200px;
  padding: 8px;
`
export const Label = styled.label<Props>`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${(props) =>
    props.categoria == enums.Categoria.AMIGOS
      ? '#f48020'
      : props.categoria == enums.Categoria.FAMILIA
      ? '#f72585'
      : props.categoria == enums.Categoria.TRABALHO
      ? '#f6e837'
      : `${variaveis.corPrincipal}`};
`
export const CampoRadio = styled.input<Props>``

export const MainContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${variaveis.cordefundo};
  border-bottom: 3px solid ${variaveis.corPrincipal};
  padding: 10px;
  display: flex;
`
export const DivCampo = styled.div`
  width: 40px;
  display: block;
`
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
