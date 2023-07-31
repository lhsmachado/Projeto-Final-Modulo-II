import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContainerRight = styled.div`
  display: block;
  width: 1600px;
  margin-left: 32px;
`
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  overflow-y: scroll;
  height: 580px;
  margin-right: 32px;
  margin-left: 32px;
  margin-top: 32px;
`
export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  margin-right: 32px;
  margin-left: 32px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--branco, #fff);
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  padding: 20px;

  input {
    border-radius: 16px;
    border: 1.5px solid #e0e0e0;
    background: #ffffff;
    width: 400px;
    height: 56px;
    flex-shrink: 0;

    color: #757575;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    padding: 16px 50px 16px 16px;
    outline: none;
  }

  button {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-left: -40px;
    margin-top: 16px;
    background-color: transparent;
    border-style: none;
  }
`
