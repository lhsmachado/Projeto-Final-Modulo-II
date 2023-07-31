import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
`

export const Sidemenu = styled.div`
  height: 100vh;
  min-width: 271px;
  background: #001c98;
`

export const ContainerImg = styled.div`
  img {
    margin-left: 49px;
    margin-top: 49px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  button {
    display: flex;
    width: 255px;
    height: 56px;
    flex-shrink: 0;
    margin-left: 8px;
    border-radius: 8px;
    background: var(--primria-azul-1, #001c98);
    border: none;
    margin-bottom: 24px;
    color: white;
    text-align: start;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;

    padding-top: 15px;
  }

  img {
    margin-left: 16px;
    margin-right: 22px;
    width: 24px;
    height: 24.089px;
    flex-shrink: 0;
  }
`
export const ContainerHelp = styled.div`
  display: flex;
  flex-direction: column;
  width: 223px;
  height: 201px;
  flex-shrink: 0;
  align-items: center;
  text-align: center;
  margin-top: 238px;
  margin-left: 24px;
  border-radius: 24px;
  background: var(--primria-azul-2, #796ce0);

  h2 {
    color: var(--branco, #fff);

    /* 16px Regular */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    width: 177px;
    margin-bottom: 16px;

    span {
      font-weight: 600;
    }
  }

  img {
    width: 194px;
    height: 194px;
    flex-shrink: 0;
    margin-top: -100px;
    margin-bottom: -20px;
  }

  button {
    border-radius: 100px;
    background: var(--primria-azul-1, #001c98);
    display: flex;
    width: 191px;
    height: 48px;
    justify-content: center;
    align-items: center;

    color: var(--branco, #fff);
    /* 16px semibold */
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    border: none;
  }
`
