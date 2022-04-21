import {
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
  GET_SEARCHED_USERS_REQUEST,
  GET_SEARCHED_USERS_SUCCESS,
  GET_SEARCHED_USERS_FAILURE,
} from '../constants/userListConstants'

const initialStateUserList = {
  loading: false,
  userList: [],
  error: null,
  success: null,
}

const initialStateSearchedUsers = {
  loading: false,
  searchedUsers: [],
  error: null,
  success: null,
}
export const getUserListReducer = (state = initialStateUserList, action) => {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      return { ...state, loading: true, userList: [] }
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload.userList,
        success: action.payload.success,
        error: null,
      }
    case GET_USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: null,
      }
    default:
      return state
  }
}

export const getSearchedUsersReducer = (
  state = initialStateSearchedUsers,
  action
) => {
  switch (action.type) {
    case GET_SEARCHED_USERS_REQUEST:
      return { ...state, loading: true, searchedUsers: [] }
    case GET_SEARCHED_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedUsers: action.payload.searchedUsers,
        success: action.payload.success,
        error: null,
      }
    case GET_SEARCHED_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: null,
      }
    default:
      return state
  }
}
