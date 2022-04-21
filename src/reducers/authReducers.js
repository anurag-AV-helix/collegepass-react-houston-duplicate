import { LOGIN_SUCCESS } from '../constants/authConstants'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: localStorage.getItem('user'),
  premiumLevel: 'Basic',
  accountTrial: true,
  profileCompleted: false,
  subscriptionId: null,
  subscription_status: null,
  plan_type: null,
  expiry_date: null,
  mandatory_field_status: false,
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      localStorage.setItem('user', payload.email)
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user: payload.email,
      }

    default:
      return state
  }
}
