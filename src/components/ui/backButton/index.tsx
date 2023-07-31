import arrow from '@/images/arrowLeft.svg'
import * as S from './styles'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function BackButton({ children }: Props) {
  return (
    <S.Container>
      <button onClick={() => history.back()} className="buttonBack">
        <img src={arrow} alt="" />
      </button>
      <h3 style={{ marginTop: 10 }}>{children}</h3>
    </S.Container>
  )
}
