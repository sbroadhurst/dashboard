import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from '@syncfusion/ej2-react-charts'

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../public/data/dummy'
import Header from '../../components/Header'
import { useTheme } from 'next-themes'
import { AxisModel } from '@syncfusion/ej2/spreadsheet'
const date1 = new Date('2017, 1, 1')

function filterValue(value: any) {
  if (value.x >= date1) {
    return value.x, value.high, value.low
  }
}
const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
  const { theme } = useTheme()
  const primaryXAxis: AxisModel = { ...FinancialPrimaryXAxis }

  return (
    <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
      <Header category="Financial" title="APPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="financial-charts"
          primaryXAxis={primaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={theme === 'dark' ? '#33373E' : 'white'}>
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
