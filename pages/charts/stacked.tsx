import React from 'react'

import StackedChart from '../../components/Charts/Stacked'
import Header from '../../components/Header'

const Stacked = () => (
  <div className="m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
)

export default Stacked
