import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
`
export const ContainerRight = styled.div`
  display: block;

  .dropdown {
    width: 335px;
    height: 321px;
    position: absolute;
    margin-left: 400px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
    h4 {
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: 0.2px;
      color: #212121;
      margin-top: 16px;
      margin-left: 16px;
    }

    h5 {
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.2px;
      margin-left: 16px;
    }
    hr {
      margin: 15px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      margin-top: 16px;
      div {
        margin-top: 16px;
      }

      label {
        margin-left: 16px;
        font-family: 'Poppins';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
        letter-spacing: 0.2px;
      }
    }

    button {
      display: flex;
      width: 303px;
      padding: 12px 64px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 16px;
      background-color: #001c98;
      color: #ffffff;
      border: none;
      margin-top: 16px;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: 0.2px;
    }
  }

  .dropdown.active {
    opacity: 1;
    visibility: visible;
    transition: translateY(0);
    transition: ease-in;
  }

  .dropdown.inactive {
    visibility: hidden;
    opacity: 0;
  }
`
export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  border-radius: 24px;
  margin-left: 10px;
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

  .dropdownButton {
    margin-left: 56px;
    margin-top: 0;
  }
`
export const Container = styled.div`
  width: 1582px;
  height: 903px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 0px 25px 0px rgba(163, 163, 163, 0.2);
  margin-left: 32px;
  margin-top: 32px;

  table {
    margin-left: 32px;
  }
`
export const ContainerPagination = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 40px;
  button {
    background-color: transparent;
    border: none;
    margin: 5px;
    font-family: 'Poppins';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.2px;
  }

  .selected {
    width: 24px;
    height: 24px;
    background-color: #001c98;
    color: #ffffff;
    border-radius: 4px;
  }
`
