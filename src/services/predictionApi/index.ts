import api from '@/services/configuration/api'
const token = localStorage.getItem('TOKEN_AUTH')

export const getPredictionApi = (search: string) =>
  api
    .get('/app/predicao?query=' + search, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-TENANT-ID': 'arnia'
      }
    })
    .then(response => response.data)
