import { ChartType, DashboardType } from '@/services/Types'
import { PieChart, Pie } from 'recharts'

export default function Chart({ percentual }: ChartType) {
  const number = percentual
  const data = [
    {
      value: percentual,
      fill: '#796CE0'
    },
    {
      value: 360 - percentual,
      fill: '#000E4D'
    }
  ]

  return (
    <PieChart width={120} height={130}>
      <Pie
        data={data}
        dataKey="value"
        cornerRadius={10}
        innerRadius={40}
        outerRadius={52}
        cx={53}
        cy={60}
        stroke="none"
      />
    </PieChart>
  )
}
