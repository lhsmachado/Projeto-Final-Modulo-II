import Sidebar from '@/components/ui/sidebar'
import * as S from './styles'
import { SetStateAction, useEffect, useState } from 'react'
import { getProductsApi } from '@/services/productsApi'
import Table from '@/components/ui/table'
import { useNavigate } from 'react-router-dom'
import { ProductListType, ProductReturnType } from '@/services/Types'
import filter from '@/images/filter.svg'
import { Button } from '@/components/ui'
export function Products() {
  const [inputsearch, setInputsearch] = useState('')
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState(Array<ProductListType>)
  const [pages, setPages] = useState(0)
  const [actualPage, setActualPage] = useState(1)
  const [visiblePages, setVisiblePages] = useState(4)
  const [totalElements, setTotalElements] = useState(0)
  const [classificacao, setClassificacao] = useState<string>('')
  const navigate = useNavigate()
  const header = [
    { header: 'ID', width: 175, padding: 20 },
    { header: 'Produto', width: 435, padding: 0 },
    { header: 'Status', width: 435, padding: 0 },
    { header: 'Percentual', width: 435, padding: 0 }
  ]
  const [classificationBtn, setClassificationBtn] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value
    if (checkboxValue === classificacao) {
      setClassificacao('')
    } else {
      setClassificacao(checkboxValue)
    }
  }
  function handleClick() {
    setSearch(inputsearch)
  }

  function handleClickFilter() {
    setClassificationBtn(!classificationBtn)
    setDropdown(!dropdown)
  }
  useEffect(() => {
    getProducts()
  }, [search, classificationBtn, actualPage])

  useEffect(() => {
    setActualPage(1)
  }, [classificacao])
  async function getProducts() {
    const response = await getProductsApi(search, classificacao, actualPage - 1)
    setProducts(response.content)
    setPages(response.totalPages)
    setTotalElements(response.totalElements)
  }
  const goToPreviousPage = () => {
    if (actualPage > 1) {
      setActualPage(actualPage - 1)
    }
  }

  const goToNextPage = () => {
    if (actualPage < pages) {
      setActualPage(actualPage + 1)
    }
  }

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= pages) {
      setActualPage(pageNumber)
    }
  }
  const visiblePageNumbers = []
  let startPage = Math.max(actualPage - Math.floor(visiblePages / 2), 1)
  let endPage = Math.min(startPage + visiblePages - 1, pages)

  if (pages > visiblePages) {
    if (endPage === pages) {
      startPage = Math.max(endPage - visiblePages + 1, 1)
    } else if (startPage === 1) {
      endPage = Math.min(startPage + visiblePages - 1, pages)
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i)
  }
  return (
    <S.Body>
      <Sidebar />
      <S.ContainerRight>
        <S.Container>
          <S.ContainerSearch>
            <input
              type="text"
              placeholder="Pesquise por uma palavra chave"
              onChange={e => setInputsearch(e.target.value)}
            />
            <button onClick={handleClick}>
              <img src=".\src\images\search.svg"></img>
            </button>
            <button
              className="dropdownButton"
              onClick={() => {
                setDropdown(!dropdown)
                console.log(dropdown)
              }}
            >
              <img src={filter} alt="" />
            </button>
          </S.ContainerSearch>
          <div className={`dropdown ${dropdown ? 'active' : 'inactive'}`}>
            <h4>Filtrar por:</h4>
            <hr />
            <h5>Status</h5>
            <form>
              <div>
                <input
                  type="checkbox"
                  name="classification"
                  value="TODOS"
                  onChange={handleCheckboxChange}
                  checked={classificacao === 'TODOS'}
                />
                <label htmlFor="todos">Todos</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="classification"
                  value="EM_ALTA"
                  onChange={handleCheckboxChange}
                  checked={classificacao === 'EM_ALTA'}
                />
                <label htmlFor="alta">Alta</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="classification"
                  value="EM_BAIXA"
                  onChange={handleCheckboxChange}
                  checked={classificacao === 'EM_BAIXA'}
                />
                <label htmlFor="baixa">Baixa</label>
                <Button type="button" onClick={handleClickFilter}>
                  Aplicar
                </Button>
              </div>
            </form>
          </div>

          <Table headers={header}>
            {products &&
              products.map((dataTable: ProductListType) => (
                <tr onClick={() => navigate(`produtos?id=${dataTable.id}`)}>
                  <td style={{ paddingLeft: 20 }}>{dataTable.id}</td>
                  <td>{dataTable.nome}</td>
                  <td>{dataTable.classificacao}</td>
                  <td style={{ paddingLeft: 30 }}>{dataTable.percentual}%</td>
                </tr>
              ))}
          </Table>
          <S.ContainerPagination>
            <button onClick={goToPreviousPage} disabled={actualPage === 1}>
              &#60;
            </button>
            {visiblePageNumbers.map(pageNumber => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={actualPage === pageNumber ? 'selected' : ''}
                disabled={actualPage === pageNumber}
              >
                {pageNumber}
              </button>
            ))}
            <button onClick={goToNextPage} disabled={actualPage === pages}>
              &gt;
            </button>
          </S.ContainerPagination>
        </S.Container>
      </S.ContainerRight>
    </S.Body>
  )
}
