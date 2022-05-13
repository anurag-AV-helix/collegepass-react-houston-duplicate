/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ expanded }) => {
  return (
    <div className={expanded ? 'sidebar sidebar--expanded' : 'sidebar'}>
      <span className="shape"></span>
      <span className="shape"></span>

      <div
        className={
          expanded
            ? 'sidebar-items-container expanded'
            : 'sidebar-items-container'
        }
      >
        {/* <div className="sidebar-link" onClick={toggleSidebar}>
          <i className="bx bx-menu"></i>
        </div> */}

        <div>
          <Link to="/" className="sidebar-link sidebar-logo">
            <img
              src="/White-holo-no-background.png"
              alt="logo"
              className="icon logo"
              style={{ width: '2.3rem' }}
            />
            <span className="sidebar-logo-text">COLLEGEPASS</span>
          </Link>
        </div>

        <Link to="/dashboard" className="sidebar-link">
          <i className="bi bi-columns icon"></i>
          <span className="sidebar-text">Dashboard</span>
        </Link>

        <Link to="/individual-stats" className="sidebar-link">
          <i className="bi bi-bar-chart-steps icon"></i>
          <span className="sidebar-text">Individual Stats</span>
        </Link>
        
        <Link to="/user-list-100" className="sidebar-link">
          <i className="bi bi-person icon"></i>
          <span className="sidebar-text">User List</span>
        </Link>

        <Link to="/events" className="sidebar-link">
          <i className="bi bi-calendar-event icon"></i>
          <span className="sidebar-text">Events</span>
        </Link>

        <Link to="/classes" className="sidebar-link">
          <i className="bi bi-book icon"></i>
          <span className="sidebar-text">Classes</span>
        </Link>
        <Link to="/notifications" className="sidebar-link">
          <i className="bi bi-app-indicator icon"></i>
          <span className="sidebar-text">Notifications</span>
        </Link>
        <Link to="/series" className="sidebar-link">
          <i className="bi bi-collection-play icon"></i>
          <span className="sidebar-text">Series</span>
        </Link>
        <Link to="/series-list" className="sidebar-link">
          <i class="bi bi-card-checklist icon"></i>
          <span className="sidebar-text">Series</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
