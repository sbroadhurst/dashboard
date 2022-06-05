import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
  AxisModel,
} from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../public/data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  const { currentMode } = useStateContext()

  const primaryXAxis: AxisModel = {
    ...LinePrimaryXAxis,
    valueType: 'DateTime',
    edgeLabelPlacement: 'Shift',
    intervalType: 'Years',
  }

  const primaryYAxis: AxisModel = {
    ...LinePrimaryYAxis,
    rangePadding: 'None',
  }

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : 'white'}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
