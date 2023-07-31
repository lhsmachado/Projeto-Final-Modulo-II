import { ResumeCardType } from '@/services/Types'
import Chart from '../pieChart'
import * as S from './styles'

export default function ResumeCard({
  title,
  type,
  variation,
  numberOf,
  chart
}: ResumeCardType) {
  return (
    <>
      <S.Container>
        <Chart percentual={chart} />
        <S.ContainerData>
          <h4>
            Total <span>{title}</span> em {type}
          </h4>
          <div className="variables">
            <h2>{numberOf} </h2>
            <h5 className={variation > 0 ? 'high' : 'low'}>{variation}%</h5>
          </div>
        </S.ContainerData>
      </S.Container>
    </>
  )
}
