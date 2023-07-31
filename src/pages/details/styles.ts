import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContainerRight = styled.div`
  display: block;

  .productName {
    font-family: 'Sora';
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: #001c98;
    margin: 32px;
  }
`
export const ContainerTables = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-left: 32px;
  margin-top: 40px;
`
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-left: 32px;
  .media {
    border-radius: 24px;
    background-color: #001c98;
    box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
    flex-direction: column;

    h5 {
      color: #ffffff;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.2px;
      margin-top: 24px;
      margin-left: 24px;
    }

    h3 {
      font-family: 'Sora';
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      color: #ffffff;
      margin-left: 24px;
    }
  }

  .trinta {
    display: flex;
    flex-direction: row;
  }
  .last {
    border-radius: 24px;
    background-color: #ffffff;
    box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
    flex-direction: column;
    h5 {
      color: #212121;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.2px;
      margin-top: 24px;
      margin-left: 24px;
    }

    h3 {
      font-family: 'Sora';
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      color: #001c98;
      margin-left: 24px;
    }

    div {
      flex-direction: row;
      h5 {
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0.2px;
        color: #ffffff;
        width: 50px;
        height: 20px;
        border-radius: 100px;
        background-color: #00c247;
        text-align: center;
        margin-top: 15px;
      }
    }
  }
`
export const Cards = styled.div`
  width: 296px;
  height: 124px;
  display: flex;
  flex-direction: column;
`
