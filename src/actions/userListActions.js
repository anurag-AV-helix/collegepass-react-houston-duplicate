import axios from 'axios'
import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
  GET_SEARCHED_USERS_REQUEST,
  GET_SEARCHED_USERS_SUCCESS,
  GET_SEARCHED_USERS_FAILURE,
} from '../constants/userListConstants'
import { getLimitedUsers, searchForUsers } from '../utils/config/API'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

export const getUserList = (initialIndex, finalIndex) => async (dispatch) => {
  dispatch({ type: GET_USER_LIST_REQUEST })
  try {
    const res = await axios.get(
      `${getLimitedUsers}/${initialIndex}/${finalIndex}/ID/DESC`,
      config
    )

    dispatch({
      type: GET_USER_LIST_SUCCESS,
      payload: {
        userList: res.data.body,
        success: 'Successfully retrieved user list',
      },
    })
  } catch (error) {
    dispatch({
      type: GET_USER_LIST_FAILURE,
      payload: {
        error: 'Unable to get user list',
      },
    })
  }
}

export const getSearchedUsers = (searchText) => async (dispatch) => {
  dispatch({ type: GET_SEARCHED_USERS_REQUEST })
  try {
    const res = await axios.get(`${searchForUsers}/${searchText}`, config)

    dispatch({
      type: GET_SEARCHED_USERS_SUCCESS,
      payload: {
        searchedUsers: res.data.body,
        success: 'Successfully retrieved searched users',
      },
    })
  } catch (error) {
    dispatch({
      type: GET_SEARCHED_USERS_FAILURE,
      payload: {
        error: 'Unable to get searched users',
      },
    })
  }
}
