import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

import Button from './Button'
import { chatData } from '../public/data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import Image from 'next/image'

const Chat = () => {
  const { currentColor } = useStateContext()

  return (
    <div className="nav-item absolute right-5 top-16 w-96 rounded-lg bg-slate-100 p-8 dark:bg-[#42464D] md:right-52">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <p className="text-lg font-semibold dark:text-gray-200">Messages</p>
          <button type="button" className="bg-orange  rounded p-1 px-2 text-xs text-white">
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item: any, index: number) => (
          <div key={index} className="border-b-1 border-color flex cursor-pointer items-center gap-5 p-3 leading-8">
            <div className="relative">
              <Image height={'40px'} width={'40px'} className="rounded-full" src={item.image} alt={item.message} />
              <span
                style={{ background: currentColor }}
                className="absolute right-0 -top-1 inline-flex h-2 w-2 rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all messages" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  )
}

export default Chat
