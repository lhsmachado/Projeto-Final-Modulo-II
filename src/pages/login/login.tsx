import { TokenType, UserType } from '@/services/Types'
import * as S from './styles'
import { Button, Input } from '@/components/ui'
import { loginApi } from '@/services/loginApi'
import { Checkbox, FormControlLabel } from '@mui/material'
import { useState } from 'react'
import api from '@/services/configuration/api'
import { useNavigate } from 'react-router-dom'
import image from '@/images/imgLogin.jpg'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  async function handleClick() {
    const user: UserType = {
      email: email,
      senha: password
    }
    const token: TokenType = await loginApi(user)
    localStorage.setItem('TOKEN_AUTH', token.token)
    api.defaults.headers.common['X-TENANT-ID'] = 'arnia'
    navigate('/dashboard')
  }

  return (
    <>
      <S.Body>
        <S.ContainerLeft>
          <S.ContainerHeader>
            <h2>Seja Bem Vindo</h2>
            <h1>Realize seu Login</h1>
          </S.ContainerHeader>
          <S.ContainerForm>
            <Input
              title="Email"
              placeholder="luis@gmail.com"
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              title="Senha"
              placeholder="******"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <S.ContainerCheckBoard>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Lembrar-me"
              />
              <a href="">Esqueci minha senha</a>
            </S.ContainerCheckBoard>
            <Button onClick={handleClick}>Entrar</Button>
          </S.ContainerForm>
        </S.ContainerLeft>
        <S.ContainerRight>
          <img src={image} alt="" />
        </S.ContainerRight>
      </S.Body>
    </>
  )
}
