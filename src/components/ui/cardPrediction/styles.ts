import { colors } from '@/assets/styles/theme'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 24px 0px 24px;

  div {
    margin-left: 8px;

    h3 {
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: 0.2px;
      color: #212121;
    }

    .bola {
      border-radius: 50%;
      display: inline-block;
      border: 3px solid;
      margin-left: -8px;
      margin-bottom: 2px;
    }
    .neutro {
      border-color: #757575;
      color: #757575;
    }

    .cardLow {
      border-color: #f33;
      color: #f33;
    }

    .cardHigh {
      border-color: #00c247;
      color: #00c247;
    }
  }
`

export const Container = styled.div`
  width: 347px;
  height: 266px;
  border-radius: 24px;
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: ${colors.grey900};
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  img {
    width: 48px;
  }
`
export const ContainerProducts = styled.div`
  width: 299px;
  height: 146px;
  border-radius: 16px;
  border-style: none;
  opacity: 0.5;
  background: #eeeeee;
  margin: 24px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 10px 0px 16px;
    .nameCard {
      font-family: 'Poppins';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.2px;
      color: #424242;
      max-width: 20ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .cardTitle {
      color: #796ce0;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.2px;
    }
  }
`
