import { colors } from '@/assets/styles/theme'
import styled from 'styled-components'

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
