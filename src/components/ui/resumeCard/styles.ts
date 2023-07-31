import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 346px;
  height: 124px;
  border-radius: 24px;
  background-color: #02156a;
`
export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #c5cfff;
    margin-top: 24px;
    span {
      font-weight: 600;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    h5 {
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.2px;
      width: 60px;
      height: 24px;
      border-radius: 100px;
      color: #ffffff;
      text-align: center;
      padding: 2px;
      margin-left: 16px;
      margin-top: 12px;
    }
    .high {
      background-color: #00c247;
    }
    .low {
      background-color: #f33;
    }

    h2 {
      margin-left: 16px;
      color: #ffffff;
      font-family: Sora;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    }
  }
`
