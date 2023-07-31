import styled from 'styled-components'
import { colors } from '@/assets/styles/theme'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  background-color: ${colors.azul1};
  width: 274px;
  height: 1080px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;

  img {
    margin: 49px;
  }
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
`
export const LinkStyled = styled(Link)`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  color: ${colors.white};
`
