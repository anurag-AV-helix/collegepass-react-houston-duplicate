import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import './sidebar.scss'

const SidebarLayout = ({ children }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  return (
    <main>
      <Sidebar expanded={expanded} />
      <MainContent expanded={expanded} toggleSidebar={toggleSidebar}>
        {children}
      </MainContent>
    </main>
  )
}

export default SidebarLayout
