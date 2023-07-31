import api from '@/services/configuration/api'
const token = localStorage.getItem('TOKEN_AUTH')
type Props = {
  type: string
  id: string
}

type ClassificationType = 'EM_ALTA' | 'EM_BAIXA'

export const getResumeDetailsApi = async ({ type, id }: Props) =>
  api
    .get('/app/' + type + '/' + id + '/resumo', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    .then(response => response.data)

export const getTableDetailsApi = async (
  { type, id }: Props,
  classification: ClassificationType
) => {
  if (type === 'cliente') {
    const response = api
      .get('/app/cliente/' + id + '/produtos?classificacao=' + classification, {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      })
      .then(response => response.data)
    return response
  }
  if (type === 'produto') {
    const response = api
      .get('/app/produto/' + id + '/clientes?classificacao=' + classification, {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-TENANT-ID': 'arnia'
        }
      })
      .then(response => response.data)
    return response
  }
}
