import styled from 'styled-components'
import { colors } from '@/assets/styles/theme'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
export const ContainerLeft = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  /* justify-items: center;
  align-items: center;
  text-align: start; */

  input {
    border-color: ${colors.grey300};
  }
  input :fill {
    border-color: ${colors.lightGreen};
  }

  h1 {
    font-family: Sora;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: ${colors.grey900};
  }

  h2 {
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    color: ${colors.grey800};
  }
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.azul1};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30%;
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 24px;

  button {
    display: flex;
    width: 400px;
    height: 56px;
    padding: 12px 64px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    border-style: none;
    background-color: ${colors.azul1};
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: ${colors.white};
  }

  input {
    width: 400px;
    height: 56px;
    border-radius: 16px;
    border: 1px solid ${colors.grey300};
    background: var(--branco, #fff);
    outline: none;
  }
  input:focus:valid {
    border: 1px solid ${colors.lightGreen};
  }

  label {
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
    color: ${colors.grey300};
  }

  input:focus:valid + label {
    color: ${colors.lightGreen};
  }
`
export const ContainerCheckBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: ${colors.grey700};
  }
  label {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: ${colors.grey900};
  }
`
