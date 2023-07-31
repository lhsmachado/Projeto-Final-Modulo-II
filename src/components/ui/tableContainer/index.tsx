import { useEffect, useState } from 'react'
import Table from '../table'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { TableDashboardApiType, TableProps, TableType } from '@/services/Types'
import { getTableApi } from '@/services/dashboardApi'
import productIcon from '@/images/productIcon.svg'
import clientIcon from '@/images/clientIcon.svg'
type Prop = {
  type1: string
  type2: string
  title: string
}

export default function TableContainer({ type1, type2, title }: Prop) {
  const [classification, setClassification] = useState('EM_ALTA')

  useEffect(() => {
    console.log(classification)
  }, [classification])
  const header = [
    { header: 'ID', width: 160, padding: 40 },
    { header: title, width: 270, padding: 10 },
    { header: 'Percentual', width: 240, padding: 40 }
  ]
  const [data, setdata] = useState<Array<TableType>>()
  const navigate = useNavigate()

  useEffect(() => {
    getTable({ classification, title })
    console.log(data)
  }, [classification])

  async function getTable({ classification, title }: TableDashboardApiType) {
    const response = await getTableApi({ classification, title })
    setdata(response)
  }

  return (
    <>
      <S.Container>
        <S.ContainerHeader>
          <div>
            {title === 'produto' ? (
              <img src={productIcon} alt="" />
            ) : (
              <img src={clientIcon} alt="" />
            )}
            <h4>{title[0].toUpperCase() + title.substring(1)}s</h4>
          </div>
          <S.Form>
            <S.Field>
              <input
                type="radio"
                id={type1}
                name="switch-one"
                value="yes"
                defaultChecked
                onChange={() => setClassification('EM_ALTA')}
              />
              <label htmlFor={type1}>Em alta</label>
              <input
                type="radio"
                id={type2}
                name="switch-one"
                value="no"
                onChange={() => setClassification('EM_BAIXA')}
              />
              <label htmlFor={type2}>Em baixa</label>
            </S.Field>
          </S.Form>
        </S.ContainerHeader>
        <S.ContainerTable>
          <Table headers={header}>
            {data &&
              data.map((dataTable: TableType) => (
                <tr
                  onClick={() => navigate(`/detalhes/${title}/${dataTable.id}`)}
                >
                  <td style={{ paddingLeft: 40 }}>{dataTable.id}</td>
                  <td style={{ paddingLeft: 10 }}>{dataTable.nome}</td>
                  <td style={{ paddingLeft: 40 }}>{dataTable.percentual}%</td>
                </tr>
              ))}
          </Table>
        </S.ContainerTable>
      </S.Container>
    </>
  )
}
