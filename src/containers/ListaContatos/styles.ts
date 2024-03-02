import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1024px;
  width: 100%;
  gap: 20px;
  padding-top: 20px;
  background-color: ${variaveis.cordefundo};
  height: 100vh;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
