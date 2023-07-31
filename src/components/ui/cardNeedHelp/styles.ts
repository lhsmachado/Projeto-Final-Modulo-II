import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 201px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #796ce0;
  margin-left: 100px;
  margin-top: 100px;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    flex-direction: row;
    width: 191px;
    height: 48px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #001c98;
    border-style: none;
    color: #ffffff;
    margin-top: 16px;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
  }

  h2 {
    text-align: center;

    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #ffffff;
    margin-top: -30px;
    width: 177px;
    height: 48px;
  }

  span {
    font-weight: 600;
  }

  img {
    margin-top: -110px;
  }
`
