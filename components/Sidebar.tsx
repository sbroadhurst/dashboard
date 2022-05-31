import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { SiShopware } from 'react-icons/si'

import { links } from '../public/data/dummy'

const Sidebar = () => {
  const activeMenu = true
  const router = useRouter()

  return (
    <div className="ml-3 h-screen overflow-auto pb-10 md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="ml-3 mt-4 flex items-center gap-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white ">
                <SiShopware /> <span>Shoppy</span>
              </div>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="mt-4 block rounded-full p-3 text-xl hover:bg-light-gray md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Links */}
          <div className="mt-10">
            {links.map((item, i) => (
              <div key={i}>
                <p className="m-3 mt-4 uppercase text-gray-400">{item.title}</p>
                {item.links.map((link, index) => {
                  const href = link.href ? link.href : link.name
                  return (
                    <Link href={href} key={index}>
                      <div onClick={() => {}} className={router?.pathname === href ? 'activeLink' : 'normalLink'}>
                        {link.icon}
                        <span className="capitalize">{link.name}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
