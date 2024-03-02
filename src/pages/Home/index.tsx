import Filtro from '../../containers/Filtro/filtro'
import ListaDeContatos from '../../containers/ListaContatos'
import Menu from '../../containers/Menu'
import { ContainerPrincipal } from '../../styles'

const Home = () => (
  <>
    <Menu />
    <Filtro criterio={'todos'} />
    <ContainerPrincipal>
      <ListaDeContatos />
    </ContainerPrincipal>
  </>
)

export default Home
