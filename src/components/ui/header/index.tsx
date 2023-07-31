import * as S from './styles'
import hmenu from '@/images/hmenu.svg'
import user from '@/images/user.svg'
import arrowDrown from '@/images/down.svg'
import setting from '@/images/setting.svg'
import logout from '@/images/logout.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const [dropdown, setDropdown] = useState(false)
  const navigate = useNavigate()
  function logoutHandle() {
    localStorage.removeItem('AUTH_TOKEN')
    navigate('/')
  }
  return (
    <S.Body>
      <img src={hmenu}></img>
      <S.ContainerUserBox>
        <img src={user}></img>
        <S.ContainerUser>
          <h1>Arnia</h1>
          <span>admin@arnia.com.br</span>
        </S.ContainerUser>
        <button onClick={() => setDropdown(!dropdown)}>
          <img src={arrowDrown}></img>
        </button>
      </S.ContainerUserBox>
      <div className={`dropdown ${dropdown ? 'active' : 'inactive'}`}>
        <div>
          <img src={setting} alt="" />
          <h4> Configurações</h4>
        </div>
        <hr />
        <div onClick={logoutHandle}>
          <img src={logout} alt="" />
          <h4>Sair</h4>
        </div>
      </div>
    </S.Body>
  )
}
