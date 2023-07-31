import * as S from './styles'
import { Button } from '@/components/ui'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '@/images/logoW3erp.svg'
import pieTwo from '@/images/pieTwo.svg'
import chartLine from '@/images/chartLine.svg'
import product from '@/images/productSide.svg'
import saly from '@/images/Saly-31.svg'
export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeButton, setActiveButton] = useState(0)

  function handleClick({ page }: { page: number }) {
    setActiveButton(page)

    if (page === 1) {
      navigate('/dashboard')
    } else if (page === 2) {
      navigate('/predicoes')
    } else if (page == 3) {
      navigate('/produtos')
    }
  }

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setActiveButton(1)
    } else if (location.pathname === '/predicoes') {
      setActiveButton(2)
    } else if (location.pathname === '/produtos') {
      setActiveButton(3)
    }
  }, [location])

  return (
    <S.Body>
      <S.Sidemenu>
        <S.ContainerImg>
          <img src={logo} />
        </S.ContainerImg>
        <S.ContainerButtons>
          <Button
            onClick={() => handleClick({ page: 1 })}
            style={{ backgroundColor: activeButton === 1 ? '#7682C1' : '' }}
          >
            <img src={pieTwo}></img>Dashboard
          </Button>
          <Button
            onClick={() => handleClick({ page: 2 })}
            style={{ backgroundColor: activeButton === 2 ? '#7682C1' : '' }}
          >
            <img src={chartLine}></img>Predições
          </Button>
          <Button
            onClick={() => handleClick({ page: 3 })}
            style={{ backgroundColor: activeButton === 3 ? '#7682C1' : '' }}
          >
            <img src={product}></img>Produtos
          </Button>
        </S.ContainerButtons>
        <S.ContainerHelp>
          <img src={saly}></img>
          <h2>
            Precisando de <span>ajuda ou suporte</span> em algo?
          </h2>
          <button>Fale conosco</button>
        </S.ContainerHelp>
      </S.Sidemenu>
    </S.Body>
  )
}
