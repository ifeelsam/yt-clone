"use client"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'

export default function Home() {

  const [sidebar, setSidebar] = useState(false);
  // hidden by defualt

  const sidebarSwitch = () => {
    setSidebar((prev) => !prev);
  }

  return (
    <>
      <Header sidebarSwitch={sidebarSwitch} />
      <Sidebar 
        sidebar={sidebar}
        sidebarSwitch={sidebarSwitch}
       />
    </>
  )
}
