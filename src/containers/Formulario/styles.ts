import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Titulo = styled.h2`
  font-size: 24px;
  font-weigth: bold;
  text-align: center;
  color: ${variaveis.corPrincipal};
  padding: 20px;
  border-bottom: 2px solid ${variaveis.corPrincipal};
`
export const Conteudo = styled.div`
  max-width: 400px;

  height: 600px;

  background-color: ${variaveis.cordefundo};
  display: block;
  color: ${variaveis.corTexto};
`
export const Form = styled.form`
  display: block;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  padding: 8px;
`

export const Botao = styled.button`
  margin-top: 50px;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${variaveis.corPrincipal};
  border: 3px solid ${variaveis.corPrincipal};
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0);
  }
`
export const botao2 = styled(Link)`
  margin-top: 50px;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: ${variaveis.corPrincipal};
  border: 3px solid ${variaveis.corPrincipal};
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0);
  }
`
export const Texto = styled.p`
  padding: 30px;
`
export const DivBotao = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
