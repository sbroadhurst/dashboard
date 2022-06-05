import React from 'react'
import LineChart from '../../components/Charts/LineChart'
import Header from '../../components/Header'

function line() {
  return (
    <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
      <Header title="Inflation Rate" category="Chart" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default line
