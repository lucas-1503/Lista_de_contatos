import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../uteis/index'

type Props = {
  criterio: 'familia' | 'amigos' | 'trabalho' | 'todos'
}

export const Card = styled.div<Props>`
  width: 200px;
  height: 300px;
  border: 3px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
  display: block;
  text-align: center;
  border-radius: 8px;
`
export const Inner = styled.div`
  position: relative;
  transition: transform 1s;
  padding: 3px;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(-180deg);
  }
  .back {
    transform: rotateY(-180deg);
  }
  perspective: 1000px;
`
export const Front = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
`
export const Back = styled.div`
  position: absolute;
  backface-visibility: hidden;
  display: block;
  text-align: center;
  justify-content: center;
  width: 100%;
`
export const Avatar = styled.img<Props>`
  border-radius: 50%;
  height: 160px;
  width: 160px;
  border: 3px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
  margin-top: 10px;
`

export const Nome = styled.h2<Props>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) =>
    props.criterio == 'amigos'
      ? '#f48020'
      : props.criterio == 'familia'
      ? '#f72585'
      : props.criterio == 'trabalho'
      ? '#f6e837'
      : `${variaveis.corPrincipal}`};
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const Botao = styled.button`
  border: 3px solid ${variaveis.corPrincipal};
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  color: ${variaveis.corPrincipal};
  background-color: ${variaveis.cordefundo};
  &:hover {
    color: ${variaveis.cordefundo};
    background-color: ${variaveis.corPrincipal};
  }
`

export const Texto = styled.p`
  color: ${variaveis.corTexto};
  padding: 10px 10px 0 10px;
  font-size: 12px;
  width: 100%;
  height: 30px;
  text-align: center;
  justify-content: center;
`
export const DivNome = styled.div<Props>`
  width: 200px;
  height: 50px;
  text-align: center;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
`
export const DivTexto = styled.div`
  max-width: 200px;
  height: 180px;
  width: 100%;
`
export const DivBotao = styled.div`
  max-width: 200px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const BotaoCancelarRemover = styled.button<Props>`
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  background-color: rgba(255, 8, 0, 1);
  &:hover {
    background-color: rgba(255, 8, 0, 0.7);
  }
  border: 2px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
`

export const BotaoEditar = styled.button<Props>`
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  background-color: rgb(9, 116, 255, 1);
  &:hover {
    background-color: rgb(9, 116, 255, 0.7);
  }
  border: 2px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
`

export const BotaoSalvar = styled.button<Props>`
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  background-color: rgba(0, 255, 0, 1);
  &:hover {
    background-color: rgba(0, 255, 0, 0.7);
  }
  border: 2px solid
    ${(props) =>
      props.criterio == 'amigos'
        ? '#f48020'
        : props.criterio == 'familia'
        ? '#f72585'
        : props.criterio == 'trabalho'
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
`
export const Label = styled.label<Props>`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) =>
    props.criterio == 'amigos'
      ? '#f48020'
      : props.criterio == 'familia'
      ? '#f72585'
      : props.criterio == 'trabalho'
      ? '#f6e837'
      : `${variaveis.corPrincipal}`};
  text-decoration: underline;
`
export const Campo = styled.input`
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 8px;
  font-size: 10px;
`
