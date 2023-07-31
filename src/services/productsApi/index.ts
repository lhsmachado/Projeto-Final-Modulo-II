import api from '@/services/configuration/api'
import { ProductReturnType } from '../Types'
const token = localStorage.getItem('TOKEN_AUTH')

export const getProductsApi = async (
  search: string,
  classificacao: string,
  page: number
): Promise<ProductReturnType> => {
  let url = '/app/produto?page=' + page + '&query=' + search + '&size=10'
  if (classificacao === 'EM_ALTA' || classificacao === 'EM_BAIXA') {
    url =
      '/app/produto?classificacao=' +
      classificacao +
      '&page=' +
      page +
      '&query=' +
      search +
      '&size=10'
  }
  const response = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-TENANT-ID': 'arnia'
    }
  })
  return response.data
}
