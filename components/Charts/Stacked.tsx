import React from 'react'
import {
  AxisModel,
  ChartComponent,
  SeriesCollectionDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  SeriesDirective,
} from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../public/data/dummy'

type Stacked = {
  height?: string
  width?: string
}

const Stacked = ({ width, height }: Stacked) => {
  const primaryXAxis: any = stackedPrimaryXAxis
  const primaryYAxis: AxisModel = stackedPrimaryYAxis

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}>
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
