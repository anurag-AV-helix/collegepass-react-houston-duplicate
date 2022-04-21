import { Navigate, Route } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated = false, loading = false },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <p> Loading...</p>
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
)

export default PrivateRoute
