import styled from 'styled-components'
import bg from '@/images/fundo.png'
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const ContainerRight = styled.div`
  width: 1600px;

  .tables {
    display: flex;
    flex-direction: row;
  }

  .tableHeader {
    display: flex;
    flex-direction: row;
    margin: 32px;
    h2 {
      font-family: 'Sora';
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.2px;
      margin-left: 16px;
      margin-top: 8px;
    }
  }

  .out {
    color: #f33;
  }

  .limitName {
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 152px;
  width: 98%;
  border-radius: 16px;
  margin: 32px;
  background: url(${bg}), lightgray 50% / cover no-repeat;
  background-color: #001c98;
  padding-top: 40px;
  padding-left: 32px;

  .clientName {
    font-family: 'Sora';
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    color: #ffffff;
  }

  .clientContact {
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.2px;
    color: #ffffff;
  }
`
export const TableHistory = styled.div`
  width: 692px;
  height: 842px;
  border-radius: 24px;
  background: #ffffff;
  margin-left: 50px;

  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);

  table {
    margin-left: 32px;
    overflow-y: scroll;
    max-height: 600px;
  }
`
export const TableRunOut = styled.div`
  width: 850px;
  height: 600px;
  border-radius: 24px;
  background: #ffffff;
  margin-left: 50px;

  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);

  table {
    margin-left: 32px;
    overflow-y: scroll;
    max-height: 600px;
  }
`
