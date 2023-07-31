import Sidebar from '@/components/ui/sidebar'
import * as S from './styles'
import {
  ClientDetailsType,
  ClientHistoryType,
  ClientRunningOutType
} from '@/services/Types'
import {
  getClientDetailsApi,
  getClientHistoryApi,
  getClientRunningOutApi
} from '@/services/predictionDetailsApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mail from '@/images/mail.svg'
import phone from '@/images/phone-telephone.svg'
import history from '@/images/history.svg'
import productLow from '@/images/productLow.svg'
import Table from '@/components/ui/table'
type Props = {
  id: string
}
export function PredictionsDetails() {
  const [clientDetails, setClientDetails] = useState<ClientDetailsType>()
  const [clientHistory, setClientHistory] = useState<Array<ClientHistoryType>>()
  const [clientProductRunningOut, setProductRunningOut] =
    useState<Array<ClientRunningOutType>>()
  const query = useParams()
  const id = query as Props
  const headerHistory = [
    { header: 'ID', width: 80, padding: 20 },
    { header: 'Produto', width: 200, padding: 10 },
    { header: 'Ultima compra', width: 140, padding: 40 },
    { header: 'Qtd.', width: 80, padding: 40 },
    { header: 'Dar baixa', width: 120, padding: 40 }
  ]
  const headerRunOut = [
    { header: 'ID', width: 80, padding: 20 },
    { header: 'Produto', width: 200, padding: 10 },
    { header: 'Ultima compra', width: 140, padding: 20 },
    { header: 'Próx. compra', width: 140, padding: 20 },
    { header: 'Qtd.', width: 80, padding: 40 },
    { header: 'Dar baixa', width: 120, padding: 40 }
  ]
  useEffect(() => {
    GetDataApi()
    console.log(clientHistory)
    console.log(clientProductRunningOut)
  }, [])

  async function GetDataApi() {
    const responseClientDetail = await getClientDetailsApi(id)
    setClientDetails(responseClientDetail)
    const responseClientHistory = await getClientHistoryApi(id)
    setClientHistory(responseClientHistory.content)
    const responseClienteRunningOut = await getClientRunningOutApi(id)
    setProductRunningOut(responseClienteRunningOut.content)
  }
  const limitedClientHistory = clientHistory?.slice(0, 10)
  const limitedClientProductRunningOut = clientProductRunningOut?.slice(0, 5)
  function formatDate(date: string) {
    const ref = date.split('-')
    return `${ref[2]}/${ref[1]}/${ref[0].substring(2)}`
  }
  return (
    <S.Body>
      <Sidebar />
      <S.ContainerRight>
        <S.Header>
          {clientDetails?.nome ? (
            <h2 className="clientName">{clientDetails?.nome}</h2>
          ) : (
            <h2>Nome não cadastrado</h2>
          )}
          <div className="clientContact">
            {clientDetails?.telefone && (
              <span>
                <img src={phone} alt="" />
                {clientDetails?.telefone}
              </span>
            )}
            {clientDetails?.email && (
              <span>
                <img src={mail} alt="" />
                {clientDetails.email}
              </span>
            )}
          </div>
        </S.Header>
        <div className="tables">
          <S.TableHistory>
            <div className="tableHeader">
              <img src={history} alt="" />
              <h2>Histórico</h2>
            </div>
            <Table headers={headerHistory}>
              {Array.isArray(limitedClientHistory) ? (
                limitedClientHistory.map((dataTable: ClientHistoryType) => (
                  <tr>
                    <td style={{ paddingLeft: 10 }}>{dataTable.id}</td>
                    <td style={{ paddingLeft: 10 }} className="limitName">
                      {dataTable.nome}
                    </td>
                    <td style={{ paddingLeft: 40 }}>
                      {formatDate(dataTable.ultimaCompra)}
                    </td>
                    <td style={{ paddingLeft: 50 }}>{dataTable.quantidade}</td>
                    <td style={{ paddingLeft: 40 }}>Dar Baixa</td>
                  </tr>
                ))
              ) : (
                <tr>Nenhum produto encontrado</tr>
              )}
            </Table>
          </S.TableHistory>
          <S.TableRunOut>
            <div className="tableHeader out">
              <img src={productLow} alt="" />
              <h2>Produtos Esgotando</h2>
            </div>
            <Table headers={headerRunOut}>
              {Array.isArray(limitedClientProductRunningOut) ? (
                limitedClientProductRunningOut.map(
                  (dataTable: ClientRunningOutType) => (
                    <tr>
                      <td style={{ paddingLeft: 10 }}>{dataTable.id}</td>
                      <td style={{ paddingLeft: 10 }} className="limitName">
                        {dataTable.nome}
                      </td>
                      <td style={{ paddingLeft: 40 }}>
                        {formatDate(dataTable.ultimaCompra)}
                      </td>
                      <td style={{ paddingLeft: 40 }}>
                        {formatDate(dataTable.proximaCompra)}
                      </td>
                      <td style={{ paddingLeft: 50 }}>
                        {dataTable.quantidade}
                      </td>
                      <td style={{ paddingLeft: 40 }}>Dar Baixa</td>
                    </tr>
                  )
                )
              ) : (
                <tr>Nenhum produto encontrado</tr>
              )}
            </Table>
          </S.TableRunOut>
        </div>
      </S.ContainerRight>
    </S.Body>
  )
}
