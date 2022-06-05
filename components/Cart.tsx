import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { useStateContext } from '../contexts/ContextProvider'
import { cartData } from '../public/data/dummy'
import Button from './Button'
import Image from 'next/image'

export const Cart = () => {
  const { currentColor } = useStateContext()

  return (
    <div className="nav-item fixed top-0 right-0 w-full overflow-scroll overflow-y-hidden bg-half-transparent ">
      <div className="md:w-400 float-right h-screen overflow-scroll bg-white p-8 transition-all duration-1000 ease-in-out dark:bg-[#484B52] dark:text-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            bgColor={undefined}
            text={undefined}
            width={undefined}
          />
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className="border-b-1 border-color flex items-center gap-5 p-4 leading-8 dark:border-gray-600">
                <Image className="rounded-lg" width={64} height={64} src={item.image} alt={item.name} />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{item.category}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <p className="text-lg font-semibold">{item.price}</p>
                    <div className="border-1 border-color flex items-center rounded border-r-0">
                      <p className="border-r-1 border-color p-2 text-red-600 dark:border-gray-600 ">
                        <AiOutlineMinus />
                      </p>
                      <p className="border-r-1 border-color p-2 text-green-600 dark:border-gray-600">0</p>
                      <p className="border-r-1 border-color p-2 text-green-600 dark:border-gray-600">
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
            icon={undefined}
            bgHoverColor={undefined}
            size={undefined}
          />
        </div>
      </div>
    </div>
  )
}
