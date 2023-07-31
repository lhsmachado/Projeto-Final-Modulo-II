import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 130px;
  padding: 37px 48px 37px 32px;
  align-items: center;
  gap: 1274px;
  flex-shrink: 0;
  background-color: white;
  .dropdown {
    width: 200px;
    height: 140px;
    position: absolute;
    top: 100px;
    background-color: #ffffff;
    right: 45px;
    filter: drop-shadow(0px 0px 25px rgba(163, 163, 163, 0.2));
    border-radius: 16px;
    div {
      display: flex;
      flex-direction: row;
      margin: 22px;
    }
    h4 {
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.2px;
      color: #757575;
      margin-left: 16px;
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
export const ContainerUserBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 56px;
  flex-shrink: 0;

  img {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
  }

  button {
    margin-left: 15px;
    border: none;
    background-color: transparent;
    img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  }
`
export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 2px;

  h1 {
    color: #212121;

    font-family: 'Sora';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.2px;
  }

  span {
    color: #757575;

    font-family: ' Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
  }
`
