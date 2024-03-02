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

export const Card = styled.div<Props>`
  width: 200px;
  height: 300px;
  border: 3px solid
    ${(props) =>
      props.categoria == enums.Categoria.AMIGOS
        ? '#f48020'
        : props.categoria == enums.Categoria.FAMILIA
        ? '#f72585'
        : props.categoria == enums.Categoria.TRABALHO
        ? '#f6e837'
        : `${variaveis.corPrincipal}`};
  display: block;
  text-align: center;
  border-radius: 8px;
`
export const Inner = styled.div`
  position: relative;
  transition: transform 1s;
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
export const Avatar = styled.img`
  border-radius: 50%;
  height: 160px;
  padding: 20px;
`

export const Nome = styled.h2<Props>`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) =>
    props.categoria == enums.Categoria.AMIGOS
      ? '#f48020'
      : props.categoria == enums.Categoria.FAMILIA
      ? '#f72585'
      : props.categoria == enums.Categoria.TRABALHO
      ? '#f6e837'
      : '#000'};
  height: 80px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 16px;
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
  padding: 10px;
  font-size: 12px;
  width: 100%;
  height: 50px;
  text-align: center;
  justify-content: center;
`
export const DivNome = styled.div`
  width: 200px;
  height: 80px;
  text-align: center;
`
export const DivTexto = styled.div`
  max-width: 200px;
  height: 140px;
  width: 100%;
`
export const DivBotao = styled.div`
  max-width: 200px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
