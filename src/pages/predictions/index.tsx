import Sidebar from '@/components/ui/sidebar'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { getPredictionApi } from '@/services/predictionApi'
import { PredictType } from '@/services/Types'
import { CardPrediction } from '@/components/ui/cardPrediction'
import Header from '@/components/ui/header'
import searchIcon from '@/images/search.svg'
export default function Predictions() {
  const [predictions, setPredictions] = useState(Array<PredictType>)
  const [inputsearch, setInputsearch] = useState('')
  const [search, setSearch] = useState('')
  useEffect(() => {
    getPredictions()
  }, [search])

  async function getPredictions() {
    const response = await getPredictionApi(search)
    setPredictions(response.content)
  }

  function handleClick() {
    setSearch(inputsearch)
  }

  console.log(predictions)
  return (
    <>
      <S.Body>
        <Sidebar />
        <S.ContainerRight>
          <Header />
          <S.ContainerSearch>
            <input
              type="text"
              placeholder="Pesquise por uma palavra chave"
              onChange={e => setInputsearch(e.target.value)}
            />
            <button onClick={handleClick}>
              <img src={searchIcon}></img>
            </button>
          </S.ContainerSearch>
          <S.ContainerCards>
            {predictions.map((data: PredictType) => (
              <CardPrediction
                id={data.id}
                nome={data.nome}
                classificacao={data.classificacao}
                produtos={data.produtos}
              />
            ))}
          </S.ContainerCards>
        </S.ContainerRight>
      </S.Body>
    </>
  )
}
