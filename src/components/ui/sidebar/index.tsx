import Button from '../button'
import CardNeedHelp from '../cardNeedHelp'
import { Container, ContainerLinks, LinkStyled } from './styles'

export default function Sidebar() {
  return (
    <>
      <Container>
        <img src="src\images\logoW3erp.svg" alt="" />
        <ContainerLinks>{/* <CardNeedHelp></CardNeedHelp> */}</ContainerLinks>
      </Container>
    </>
  )
}
