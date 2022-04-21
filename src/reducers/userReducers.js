import {
  USER_BASIC_DETAILS_REQUEST,
  USER_BASIC_DETAILS_SUCCESS,
  USER_BASIC_DETAILS_FAIL,
  USER_PRIME_DETAILS_REQUEST,
  USER_PRIME_DETAILS_SUCCESS,
  USER_PRIME_DETAILS_FAIL,
  USER_PRIMEPLUS_DETAILS_REQUEST,
  USER_PRIMEPLUS_DETAILS_SUCCESS,
  USER_PRIMEPLUS_DETAILS_FAIL,
  UPDATE_PRIME_DETAILS_REQUEST,
  UPDATE_PRIME_DETAILS_SUCCESS,
  UPDATE_PRIME_DETAILS_FAIL,
  UPDATE_PRIMEPLUS_DETAILS_REQUEST,
  UPDATE_PRIMEPLUS_DETAILS_SUCCESS,
  UPDATE_PRIMEPLUS_DETAILS_FAIL,
  UPDATE_BASIC_DETAILS_REQUEST,
  UPDATE_BASIC_DETAILS_SUCCESS,
  UPDATE_BASIC_DETAILS_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
} from '../constants/userConstants'

const initialStateUserDetails = {
  loading: false,
  userDetails: {},
  status: null,
  success: null,
  error: null,
}

const initialStatePrimeDetails = {
  loading: false,
  userDetails: {},
  status: null,
  success: null,
  error: null,
}

const initialStatePrimePlusDetails = {
  loading: false,
  userDetails: {},
  status: null,
  success: null,
  error: null,
}

const initialStateUpdatePrimeDetails = {
  loading: false,
  status: null,
  success: null,
  error: null,
}

const initialStateUpdatePrimePlusDetails = {
  loading: false,
  status: null,
  success: null,
  error: null,
}

const initialStateUpdateBasicDetails = {
  loading: false,
  status: null,
  success: null,
  error: null,
}

const initialStateUpdateUserPassword = {
  loading: false,
  status: null,
  success: null,
  error: null,
}

export const userEditDetailsReducer = (
  state = initialStateUserDetails,
  action
) => {
  switch (action.type) {
    case USER_BASIC_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_BASIC_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
        userDetails: action.payload.userDetails,
      }
    case USER_BASIC_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const userPrimeReducer = (state = initialStatePrimeDetails, action) => {
  switch (action.type) {
    case USER_PRIME_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_PRIME_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
        userDetails: action.payload.userDetails,
      }
    case USER_PRIME_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const userPrimePlusReducer = (
  state = initialStatePrimePlusDetails,
  action
) => {
  switch (action.type) {
    case USER_PRIMEPLUS_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_PRIMEPLUS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
        userDetails: action.payload.userDetails,
      }
    case USER_PRIMEPLUS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const updatePrimeReducer = (
  state = initialStateUpdatePrimeDetails,
  action
) => {
  switch (action.type) {
    case UPDATE_PRIME_DETAILS_REQUEST:
      return { ...state, loading: true }
    case UPDATE_PRIME_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
      }
    case UPDATE_PRIME_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const updatePrimePlusReducer = (
  state = initialStateUpdatePrimePlusDetails,
  action
) => {
  switch (action.type) {
    case UPDATE_PRIMEPLUS_DETAILS_REQUEST:
      return { ...state, loading: true }
    case UPDATE_PRIMEPLUS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
      }
    case UPDATE_PRIMEPLUS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const updateBasicReducer = (
  state = initialStateUpdateBasicDetails,
  action
) => {
  switch (action.type) {
    case UPDATE_BASIC_DETAILS_REQUEST:
      return { ...state, loading: true }
    case UPDATE_BASIC_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
      }
    case UPDATE_BASIC_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export const updateUserPasswordReducer = (
  state = initialStateUpdateUserPassword,
  action
) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST:
      return { ...state, loading: true }
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        success: action.payload.success,
      }
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        error: action.payload.error,
      }

    default:
      return state
  }
}
