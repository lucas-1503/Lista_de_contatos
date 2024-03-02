import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Menu = styled.nav`
  display: flex;
  color: #fff;
  background-color: #201410;
  max-width: 200px;
  width: 100%;
`

export const Cabecalho = styled.header`
  max-width: 1024px;
  width: 100%;
  display: flex;
  background-color: ${variaveis.cordefundo};
  border-bottom: 3px solid ${variaveis.corPrincipal};
`
export const Lista = styled.ul`
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  height: 80px;
  padding: 10px;
`
export const Item = styled.li`
  padding: 8px;
`

export const Botao = styled(Link)`
  padding: 8px;
  border: 3px solid ${variaveis.corPrincipal};
  color: ${variaveis.corPrincipal};
  background-color: #000;
  font-weight: bold;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
export const Botao2 = styled.button`
  padding: 8px;
  border: 3px solid ${variaveis.corPrincipal};
  color: ${variaveis.corPrincipal};
  background-color: #000;
  font-weight: bold;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`
