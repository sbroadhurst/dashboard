import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import { useStateContext } from '../contexts/ContextProvider'

import avatar from '../public/data/avatar.jpg'
import { Cart } from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import UserProfile from './UserProfile'

type NavProps = {
  title: string
  customFunc: any
  icon: any
  color: string
  dotColor?: string
}

const NavButton = ({ title, customFunc, icon, color, dotColor }: NavProps) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative rounded-full p-3 text-xl hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } =
    useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {
    if (screenSize && screenSize <= 1024) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize, setActiveMenu])

  return (
    <div className="navbar fixed w-full bg-main-bg dark:bg-main-dark-bg md:static">
      <div className="flex justify-end p-2 md:mx-6">
        {screenSize && screenSize <= 1024 ? (
          <NavButton
            title="Menu"
            customFunc={() => setActiveMenu((prevActiveMenu: boolean) => !prevActiveMenu)}
            color={currentColor}
            icon={<AiOutlineMenu />}
          />
        ) : null}
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg hover:bg-light-gray "
            onClick={() => handleClick('userProfile')}>
            <Image src={avatar} alt="avatar" width={32} height={32} className="rounded-full" />
            <p>
              <span className="text-14 text-gray-400">Hi, </span>{' '}
              <span className="ml-1 text-14 font-bold text-gray-400">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>

        {/* NavBar Select Components*/}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
