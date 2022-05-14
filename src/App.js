import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import SidebarLayout from './layouts/sidebarLayout/index'
import Homepage from './pages/Homepage'
import UserList from './pages/Pages/UserList'
import Login from './pages/Pages/Login'
import { EditUser } from './pages/Pages/EditUser'
import Events from './pages/Pages/Events'
import EditEvent from './pages/Pages/EditEvent'
import Classes from './pages/Pages/Classes'
import AddClass from './pages/Pages/AddClass'
import Notifications from './pages/Pages/SendNotification'
import Dashboard from './pages/Pages/Dashboard'
import Series from './pages/Pages/Series'
import SeriesList from './pages/Pages/SeriesList'
import IndividualStats from './pages/Pages/IndividualStats'
import DailyByte from './pages/Pages/DailyByte'
import ScheduleDailyByte from './pages/Pages/ScheduleDailyByte'


const RoutesList = [
  {
    title: 'Houston - CollegePass',
    description: 'Admin panel for CollegePass',
    keywords: 'Admin Panel',
    path: '/',
    component: <Homepage />,
    isPrivate: false,
  },

  {
    title: 'Login',
    path: '/login',
    component: <Login />,
    isPrivate: false,
  },

  {
    title: 'User List',
    path: '/user-list-100',
    component: <UserList />,
    isPrivate: false,
  },

  {
    title: 'Edit User',
    path: '/user/edit-user/:id',
    component: <EditUser />,
    isPrivate: false,
  },

  {
    title: 'Events',
    path: '/events',
    component: <Events />,
    isPrivate: false,
  },

  {
    title: 'Edit Event',
    path: '/events/edit-event/:id',
    component: <EditEvent />,
    isPrivate: false,
  },
  {
    title: 'Edit Event',
    path: '/events/add-event',
    component: <EditEvent />,
    isPrivate: false,
  },
  {
    title: 'Classes',
    path: '/classes',
    component: <Classes />,
    isPrivate: false,
  },
  {
    title: 'Classes',
    path: '/classes/add-class',
    component: <AddClass />,
    isPrivate: false,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    component: <Notifications />,
    isPrivate: false,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    component: <Dashboard />,
    isPrivate: false,
  },
  {
    title: 'Series',
    path: '/series/',
    component: <Series />,
    isPrivate: false,
   },

  {
    title: 'SeriesList',
    path: '/series-list/',
    component: <SeriesList />,
    isPrivate: false,
   },
   {
    title: 'IndividualStats',
    path: '/individual-stats/',
    component: <IndividualStats />,
    isPrivate: false,
   },
   {
    title: 'DailyByte',
    path: '/daily-byte/',
    component: <DailyByte />,
    isPrivate: false,
   },
   {
    title: 'ScheduleDailyByte',
    path: '/schedule-daily-byte/',
    component: <ScheduleDailyByte />,
    isPrivate: false,
   },
]

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarLayout>
          <Routes>
            {RoutesList.map((item) =>
              item.isPrivate ? (
                <PrivateRoute
                  path={item.path}
                  component={item.component}
                  key={item.path}
                />
              ) : (
                <Route
                  path={item.path}
                  element={item.component}
                  key={item.path}
                />
              )
            )}
          </Routes>
        </SidebarLayout>
      </BrowserRouter>
    </div>
  )
}

export default App
