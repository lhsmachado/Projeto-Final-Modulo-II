import api from '@/services/configuration/api'
const token = localStorage.getItem('TOKEN_AUTH')
type Props = {
  id: string
}
export const getClientDetailsApi = ({ id }: Props) =>
  api
    .get('/app/cliente/' + id, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    .then(response => response.data)

export const getClientHistoryApi = ({ id }: Props) =>
  api
    .get('/app/predicao/' + id + '/historico', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    .then(response => response.data)

export const getClientRunningOutApi = ({ id }: Props) =>
  api
    .get('/app/predicao/' + id + '/esgotando', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    .then(response => response.data)
