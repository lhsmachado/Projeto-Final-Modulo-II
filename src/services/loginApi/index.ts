import api from '@/services/configuration/api'
import { TokenType } from '../Types'

type Props = {
  email: string
  senha: string
}

export const loginApi = ({ email, senha }: Props): Promise<TokenType> =>
  api
    .post('/central/autenticacao/login', {
      email: email,
      senha: senha
    })
    .then(response => response.data)
