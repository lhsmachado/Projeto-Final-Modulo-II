import { PredictType, ProductsType } from '@/services/Types'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'

export function CardPrediction({
  nome,
  id,
  classificacao,
  produtos
}: PredictType) {
  const navigate = useNavigate()

  function formatDate(date: string) {
    const ref = date.split('-')
    return `${ref[2]}/${ref[1]}/${ref[0].substring(2)}`
  }
  return (
    <>
      <S.Container onClick={() => navigate(`/detalhepredicoes/${id}`)}>
        <S.Header>
          <img src="src/images/peopleIcon.svg" alt="" />
          <div>
            <h3>{nome}</h3>
            <span>
              {classificacao === 'NEUTRO' ? (
                <div className="neutro">
                  <div className="bola neutro"></div> Neutro
                </div>
              ) : classificacao === 'EM_BAIXA' ? (
                <div className="cardLow">
                  <div className="bola "></div> Em baixa
                </div>
              ) : (
                <div className="cardHigh">
                  <div className="bola "></div> Em Alta
                </div>
              )}
            </span>
          </div>
        </S.Header>
        <S.ContainerProducts>
          <div>
            <span className="cardTitle">Produto</span>
            <span className="cardTitle">Próx. Compra</span>
          </div>
          {produtos.map((data: ProductsType) => (
            <div>
              <span className="nameCard">{data.nome}</span>
              <span className="">{formatDate(data.proximaCompra)}</span>
            </div>
          ))}
        </S.ContainerProducts>
      </S.Container>
    </>
  )
}
