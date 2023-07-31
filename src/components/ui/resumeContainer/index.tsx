import { DashboardType } from '@/services/Types'
import ResumeCard from '../resumeCard'
import Toggle from '../toggle'
import * as S from './styles'

type DashboardProps = {
  data: DashboardType
}

export default function ResumeContainer(props: DashboardProps) {
  return (
    <>
      <S.Container>
        <S.ContainerHeader>
          <h2>Dashboard</h2>
          <S.DateInput>
            <img src="src\images\calendar.svg" alt="" />
            <h3>
              Mostrar: <span>Esse mês</span>
            </h3>
            <img src="src\images\down.svg" alt="" />
          </S.DateInput>
        </S.ContainerHeader>
        <S.ContainerCards>
          <ResumeCard
            title={'produtos'}
            type={'alta'}
            chart={props.data.percentualTotalProdutosAlta}
            numberOf={props.data.quantidadeProdutosAlta}
            variation={props.data.percentualVariacaoProdutosAlta}
          />
          <ResumeCard
            title={'produtos'}
            type={'baixa'}
            chart={props.data.percentualTotalProdutosBaixa}
            numberOf={props.data.quantidadeClientesBaixa}
            variation={props.data.percentualVariacaoProdutosBaixa}
          />
          <ResumeCard
            title={'clientes'}
            type={'alta'}
            chart={props.data.percentualTotalClientesAlta}
            numberOf={props.data.quantidadeClientesAlta}
            variation={props.data.percentualVariacaoClientesAlta}
          />
          <ResumeCard
            title={'clientes'}
            type={'baixa'}
            chart={props.data.percentualTotalClientesBaixa}
            numberOf={props.data.quantidadeClientesBaixa}
            variation={props.data.percentualVariacaoProdutosBaixa}
          />
        </S.ContainerCards>
      </S.Container>
    </>
  )
}
