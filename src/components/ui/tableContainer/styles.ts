import styled from 'styled-components'
import { colors } from '@/assets/styles/theme'

export const Container = styled.div`
  width: 771px;
  height: auto;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
`
export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 48px;
  margin-right: 32px;

  h4 {
    font-family: Sora;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.2px;
  }

  div {
    display: flex;
    flex-direction: row;

    h4 {
      margin-top: 30px;
      margin-left: 25px;
    }

    img {
      height: 50px;
      width: 50px;
      margin-top: 20px;
    }
  }
`
export const Form = styled.form`
  width: 251px;
  height: 40px;
  background-color: ${colors.grey100};
  border: 0.8px solid ${colors.grey300};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 25px;
`
export const Field = styled.div`
  display: flex;
  gap: 2px;
  overflow: hidden;

  input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
    background-color: transparent;
    color: ${colors.grey500};
    font-size: 14px;
    padding-top: 7px;
    font-weight: 600;
    font-family: 'Poppins';
    line-height: 140%;
    text-align: center;
    border-radius: 8px;
    width: 119px;
    height: 32px;
    transition: all 0.1s ease-in-out;
  }

  input:checked:first-of-type + label {
    background-color: #a5dc86;
    box-shadow: none;
    color: #ffffff;
  }

  input:checked:last-of-type + label {
    background-color: ${colors.error};
    color: #ffffff;
  }
`
export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
`
