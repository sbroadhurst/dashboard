import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
  AxisModel,
} from '@syncfusion/ej2-react-charts'
import Header from '../../components/Header'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../public/data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

function Area() {
  const { currentMode } = useStateContext()

  const primaryXAxis: AxisModel = {
    ...areaPrimaryXAxis,
    valueType: 'DateTime',
    edgeLabelPlacement: 'Shift',
    intervalType: 'Years',
  }

  return (
    <div>
      <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
        <Header title="Inflation Rate in Percentage Area" category="Chart" />
      </div>

      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={primaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : 'white'}>
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area
