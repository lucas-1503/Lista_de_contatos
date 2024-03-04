import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    list-style: none;
    margin:0 auto;
  }
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 8px;
`
export const ContainerPrincipal = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: ${variaveis.cordefundo};
  overflow-x: hidden;
  overflow-y: hidden;
`

export default EstiloGlobal
