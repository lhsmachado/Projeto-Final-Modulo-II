import styled from 'styled-components'

export const TableContainer = styled.div`
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
`
export const Table = styled.table`
  /* width: 700px; */
  text-align: center;
  border-radius: 16px;
  border-collapse: separate;
  border-spacing: 0 8px;
  text-align: left;

  tr {
    height: 56px;
    background-color: #fafafa;
  }
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }

  thead {
    width: 707px;
    height: 56px;
    color: #ffffff;

    tr {
      background-color: #001c98;
    }
  }
`
