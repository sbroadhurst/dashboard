import React from 'react'

import { earningData, SparklineAreaData, ecomPieChartData } from '../public/data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import Button from '../components/Button'
import { GoPrimitiveDot } from 'react-icons/go'
import { SparkLine } from '../components/Charts/SparkLine'
import Stacked from '../components/Charts/Stacked'

function ecommerce() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap ">
        <div className="m-3 h-44 w-full rounded-xl bg-white bg-hero-pattern bg-cover bg-center bg-no-repeat p-8 pt-9 dark:bg-secondary-dark-bg dark:text-gray-200 lg:w-80">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button> */}
          </div>
          <div className="mt-6">
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <div className="m-3 flex flex-wrap items-center justify-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="h-44 rounded-2xl bg-white p-4 pt-9 shadow-2xl dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="opacity-0.9 rounded-full p-4  text-2xl hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`ml-2 text-sm`} style={{ color: item.percentage > 0 ? 'green' : 'red' }}>
                  {item.percentage}%
                </span>
              </p>
              <p className="mt-1 text-sm  text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <div className="m-3 rounded-2xl bg-white p-4 shadow-2xl dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            <div className="m-4 border-r-1 border-color pr-10 ">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438.00</span>
                  <span className="ml-3 cursor-pointer rounded-full bg-green-400 p-1.5 text-xs text-white hover:drop-shadow-xl">
                    23%
                  </span>
                </p>
                <p className="mt-1 text-gray-500">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438.00</span>
                </p>
                <p className="mt-1 text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine currentColor="white" height="80px" width="250px" data={SparklineAreaData} color="blue" />
              </div>
              <div className="mt-10">
                <Button color="white" bgColor="blue" text="Download Report" borderRadius="10px" size="md" />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ecommerce
