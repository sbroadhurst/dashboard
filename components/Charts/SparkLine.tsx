import React from 'react'
import {
  AxisModel,
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts'

type Sparkline = {
  height: string
  width: string
  color: string
  data: { x: number; y: number }[]
  currentColor: string
}

export const SparkLine = ({ height, width, color, data, currentColor }: Sparkline) => {
  const primaryXAxis: AxisModel = { valueType: 'Double' }

  return (
    <ChartComponent
      id="sparkLine"
      primaryXAxis={primaryXAxis}
      height={height}
      width={width}
      tooltip={{ enable: true, format: '<b>x:${point.x}  y:${point.y}</b>' }}
      border={{ color: currentColor, width: 2 }}
      palettes={[color]}>
      <Inject services={[SplineSeries, Category, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName="x" yName="y" type="Spline" />
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}
