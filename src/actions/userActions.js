import axios from 'axios'
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
import {
  APIuserAdminDBDetails,
  APIuserPrimeDetails,
  APIuserPrimePlusDetails,
  APIupdatePrimeDetails,
  APIupdatePrimePlusDetails,
  APIupdateMandatoryDetails,
  APIupdateUserPassword,
} from '../utils/config/API'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

export const listUserBasicDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_BASIC_DETAILS_REQUEST })
    const { data } = await axios.get(`${APIuserAdminDBDetails}/${id}`, config)
    dispatch({
      type: USER_BASIC_DETAILS_SUCCESS,
      payload: {
        userDetails: data.user,
        status: 'success',
        success: 'Basic Details Successfully Retrieved',
      },
    })
  } catch (error) {
    dispatch({
      type: USER_BASIC_DETAILS_FAIL,
      payload: {
        status: 'fail',
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    })
  }
}

export const listUserPrimeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_PRIME_DETAILS_REQUEST })
    const { data } = await axios.get(`${APIuserPrimeDetails}/${id}`, config)
    dispatch({
      type: USER_PRIME_DETAILS_SUCCESS,
      payload: {
        userDetails: data.user,
        status: 'success',
        success: 'Prime Details Successfully Retrieved',
      },
    })
  } catch (error) {
    dispatch({
      type: USER_PRIME_DETAILS_FAIL,
      payload: {
        status: 'fail',
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    })
  }
}

export const listUserPrimePlusDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_PRIMEPLUS_DETAILS_REQUEST })
    const { data } = await axios.get(`${APIuserPrimePlusDetails}/${id}`, config)
    dispatch({
      type: USER_PRIMEPLUS_DETAILS_SUCCESS,
      payload: {
        userDetails: data.user,
        status: 'success',
        success: 'Basic Details Successfully Retrieved',
      },
    })
  } catch (error) {
    dispatch({
      type: USER_PRIMEPLUS_DETAILS_FAIL,
      payload: {
        status: 'fail',
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    })
  }
}

export const updateUserPrimeDetails = (primeDetails) => async (dispatch) => {
  const body = {
    userID: primeDetails.id,
    premium: primeDetails.prime,
    startDate: primeDetails.startDate,
    endDate: primeDetails.endDate,
  }
  try {
    dispatch({ type: UPDATE_PRIME_DETAILS_REQUEST })
    const { data } = await axios.post(`${APIupdatePrimeDetails}`, body, config)
    dispatch({
      type: UPDATE_PRIME_DETAILS_SUCCESS,
      payload: {
        status: data.user,
        success: 'Prime Details Updated',
      },
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PRIME_DETAILS_FAIL,
      payload: {
        status: false,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    })
  }
}

export const updateUserPrimePlusDetails =
  (userID, primePlusDetails) => async (dispatch) => {
    // "userID": 8525,
    // "primePlusDetails": [
    //     {
    //         "primePlusID": 4,
    //         "startDate": "2020-07-03",
    //         "endDate": "2022-07-03"
    //     },
    //     {
    //         "primePlusID": 3,
    //         "startDate": "2020-07-03",
    //         "endDate": "2022-07-03"
    //     }
    // ]
    const body = {
      userID,
      primePlusDetails,
    }
    try {
      dispatch({ type: UPDATE_PRIMEPLUS_DETAILS_REQUEST })
      const { data } = await axios.post(
        `${APIupdatePrimePlusDetails}`,
        body,
        config
      )
      if (data.statusCode === 200) {
        dispatch({
          type: UPDATE_PRIMEPLUS_DETAILS_SUCCESS,
          payload: {
            status: true,
            success: 'Prime Plus Details Updated',
          },
        })
      } else {
        dispatch({
          type: UPDATE_PRIMEPLUS_DETAILS_FAIL,
          payload: {
            status: false,
            error: 'Prime Plus Details not updated, try again!',
          },
        })
      }
    } catch (error) {
      dispatch({
        type: UPDATE_PRIMEPLUS_DETAILS_FAIL,
        payload: {
          status: false,
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        },
      })
    }
  }

export const updateUserMandatoryDetails =
  (mandatoryUserDetails) => async (dispatch) => {
    // {
    // "userID": 8525,
    // "fName": "Chirag",
    // "lName": "Ramachandra",
    // "countryCode": "91",
    // "phoneNumber": 8951831967,
    // "grade": 3,
    // "curriculum": 4,
    // "graduationYear": "2025",
    // "mobileOTP": 1,
    //
    // }

    try {
      dispatch({ type: UPDATE_BASIC_DETAILS_REQUEST })
      const { data } = await axios.post(
        `${APIupdateMandatoryDetails}`,
        mandatoryUserDetails,
        config
      )
      if (data.statusCode === 200) {
        dispatch({
          type: UPDATE_BASIC_DETAILS_SUCCESS,
          payload: {
            status: true,
            success: 'Mandatory User Details Updated',
          },
        })
      } else {
        dispatch({
          type: UPDATE_BASIC_DETAILS_FAIL,
          payload: {
            status: false,
            error: 'Mandatory User Details not updated, try again!',
          },
        })
      }
    } catch (error) {
      dispatch({
        type: UPDATE_BASIC_DETAILS_FAIL,
        payload: {
          status: false,
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        },
      })
    }
  }

export const updateUserPassword = (password, userID) => async (dispatch) => {
  const body = {
    userID,
    newPassword: password,
  }
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST })
    const { data } = await axios.post(`${APIupdateUserPassword}`, body, config)
    if (data.statusCode === 200) {
      dispatch({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: {
          status: true,
          success: `Password updated to: "${password}"`,
        },
      })
    } else {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: {
          status: false,
          error: 'Password not updated, try again!',
        },
      })
    }
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: {
        status: false,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    })
  }
}
