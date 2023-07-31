import ResumeContainer from '@/components/ui/resumeContainer'
import Sidebar from '@/components/ui/sidebar'
import * as S from './styles'
import TableContainer from '@/components/ui/tableContainer'
import { useEffect, useState } from 'react'
import { getDashboardApi } from '@/services/dashboardApi'
import { DashboardType, TableType } from '@/services/Types'

export default function Dashboard() {
  const [resume, setResume] = useState<DashboardType>()
  useEffect(() => {
    getResume()
  }, [])

  async function getResume() {
    const response = await getDashboardApi()
    setResume(response)
  }

  return (
    <>
      <S.Body>
        <Sidebar />
        <S.ContainerRight>
          {resume && <ResumeContainer data={resume} />}
          <S.ContainerTables>
            <TableContainer
              type1="productsHigh"
              type2="productsLow"
              title="produto"
            />
            <TableContainer
              type1="clientsHigh"
              type2="clientsLow"
              title="cliente"
            />
          </S.ContainerTables>
        </S.ContainerRight>
      </S.Body>
    </>
  )
}
function getTable(arg0: { classification: any; title: any }) {
  throw new Error('Function not implemented.')
}
