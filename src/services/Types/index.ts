import { ReactNode } from 'react'

export type TokenType = {
  token: string
  type: string
}

export type UserType = {
  email: string
  senha: string
}

export type DashboardType = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}

export type ResumeCardType = {
  title: string
  type: string
  chart: number
  numberOf: number
  variation: number
}

export type ChartType = {
  percentual: number
}

export type TableType = {
  id: number
  nome: string
  percentual: number
}

export type TableProps = {
  headers: Array<{
    header: string
    width: number
    padding: number
  }>

  children: ReactNode
}

export type TableDashboardApiType = {
  title: string
  classification: string
}

export type ProductsType = {
  id: number
  nome: string
  proximaCompra: string
}

export type PredictType = {
  id: number
  nome: string
  telefone?: string
  email?: string
  whatsapp?: string
  classificacao: string
  percentual?: number
  produtos: Array<ProductsType>
}

export type ProductListType = {
  id: number
  nome: string
  classificacao: string
  percentual: number
}

export type ProductReturnType = {
  content: Array<ProductListType>
  pageable: {
    sort: {
      sorted: boolean
      unsorted: boolean
      empty: boolean
    }
    pageNumber: number
    pageSize: number
    offset: number
    paged: boolean
    unpaged: boolean
  }
  sort: {
    sorted: boolean
    unsorted: boolean
    empty: boolean
  }
  last: boolean
  totalElements: number
  totalPages: number
  first: boolean
  number: number
  numberOfElements: number
  size: boolean
  empty: boolean
}

export type ResumeDetailsType = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
  ultimos120Dias: number
}

export type TableDetailsType = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}

export type ClientDetailsType = {
  cpfcnpj: string
  email: string
  id: number
  nome: string
  telefone: string
  whatsapp: string
}

export type ClientHistoryType = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
}

export type ClientRunningOutType = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
  proximaCompra: string
}
