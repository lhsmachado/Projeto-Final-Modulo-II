import { Children, useEffect, useState } from 'react'
import * as S from './styles'
import { TableProps, TableType } from '@/services/Types'
import { getTableApi } from '@/services/dashboardApi'
import { useNavigate } from 'react-router-dom'
type Props = {
  header: string
  width: number
  padding: number
}
export default function Table({ headers, children }: TableProps) {
  return (
    <S.TableContainer>
      <S.Table cellSpacing={0}>
        <thead>
          <tr>
            {headers.map((data: Props) => (
              <th style={{ width: data.width, paddingLeft: data.padding }}>
                {data.header === 'produto' || data.header === 'cliente'
                  ? data.header[0].toUpperCase() +
                    data.header.substring(1) +
                    's'
                  : data.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </S.Table>
    </S.TableContainer>
  )
}
