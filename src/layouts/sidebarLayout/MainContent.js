import React from 'react'

const MainContent = ({ expanded, children, toggleSidebar }) => {
  return (
    <section
      className={
        expanded ? 'main-content main-content--expanded' : 'main-content'
      }
    >
      <div className="header">
        <div
          className="sidebar-toggle-container d-inline toggled"
          onClick={toggleSidebar}
        >
          <button type="button" className="sidebar-toggler">
            <span className="sidebar-toggler-bar bar1"></span>
            <span className="sidebar-toggler-bar bar2"></span>
            <span className="sidebar-toggler-bar bar3"></span>
          </button>
        </div>
      </div>
      <div className="container w-100">{children}</div>
    </section>
  )
}

export default MainContent
