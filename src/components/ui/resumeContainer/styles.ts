import { colors } from '@/assets/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
  width: 98%;
  height: 292px;
  border-radius: 24px;
  background-color: #001c98;
`
export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
  margin-left: 40px;
  margin-right: 40px;

  h2 {
    font-family: Sora;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: #ffffff;
  }
`
export const DateInput = styled.div`
  width: 224px;
  height: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  img {
    height: 24px;
    margin-right: 8px;
  }

  h3 {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: ${colors.grey800};

    span {
      color: #001c98;
      font-weight: 600;
    }
  }
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 30px; */
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
`
