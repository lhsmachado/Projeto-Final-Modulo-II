import Sidebar from '@/components/ui/sidebar'
import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getResumeDetailsApi, getTableDetailsApi } from '@/services/detailsApi'
import { ResumeDetailsType, TableDetailsType } from '@/services/Types'
import Table from '@/components/ui/table'
import Header from '@/components/ui/header'
import BackButton from '@/components/ui/backButton'

type Props = {
  type: string
  id: string
}
export function Details() {
  const query = useParams()

  const teste: Props = query as Props

  const header = [
    { header: 'ID', width: 150, padding: 20 },
    { header: 'Cliente', width: 280, padding: 0 },
    { header: 'Produto', width: 180, padding: 0 },
    { header: 'Qtd', width: 110, padding: 0 }
  ]
  const [resume, setResume] = useState<ResumeDetailsType>()
  const [tableHigh, setTableHigh] = useState<Array<TableDetailsType>>([])
  const [tableLow, setTableLow] = useState<Array<TableDetailsType>>([])
  useEffect(() => {
    getDataApi()
  }, [])

  async function getDataApi() {
    const responseResume = await getResumeDetailsApi(teste)
    setResume(responseResume)
    const responseTableHigh = await getTableDetailsApi(teste, 'EM_ALTA')
    setTableHigh(responseTableHigh)
    const responseTableLow = await getTableDetailsApi(teste, 'EM_BAIXA')
    setTableLow(responseTableLow)
  }

  return (
    <>
      <S.Body>
        <Sidebar />
        <S.ContainerRight>
          <Header />
          <BackButton>Detalhamento</BackButton>
          <h2 className="productName">{resume?.nome}</h2>
          <S.ContainerCards>
            <S.Cards className="media">
              <h5>Média 120 dias</h5>
              <h3>{resume?.media120Dias}</h3>
            </S.Cards>
            <S.Cards className="last">
              <h5>Ultimos 30 dias</h5>
              <div className="trinta">
                <h3>{resume?.ultimos30Dias}</h3>
                <h5>{resume?.percentualUltimos30Dias}%</h5>
              </div>
            </S.Cards>
            <S.Cards className="last">
              <h5>Ultimos 60 dias</h5>
              <h3>{resume?.ultimos60Dias}</h3>
            </S.Cards>
            <S.Cards className="last">
              <h5>Ultimos 90 dias</h5>
              <h3>{resume?.ultimos90Dias}</h3>
            </S.Cards>
            <S.Cards className="last">
              <h5>Ultimos 1260 dias</h5>
              <h3>{resume?.ultimos120Dias}</h3>
            </S.Cards>
          </S.ContainerCards>
          <S.ContainerTables>
            <Table headers={header}>
              {tableHigh.map((dataTable: TableDetailsType) => (
                <tr>
                  <td>{dataTable.id}</td>
                  <td>{dataTable.nome}</td>
                  <td>{dataTable.percentual}%</td>
                </tr>
              ))}
            </Table>
            <Table headers={header}>
              {tableLow.map((dataTable: TableDetailsType) => (
                <tr>
                  <td>{dataTable.id}</td>
                  <td>{dataTable.nome}</td>
                  <td>{dataTable.percentual}%</td>
                </tr>
              ))}
            </Table>
          </S.ContainerTables>
        </S.ContainerRight>
      </S.Body>
    </>
  )
}
