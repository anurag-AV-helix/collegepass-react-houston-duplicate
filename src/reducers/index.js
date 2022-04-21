import { combineReducers } from 'redux'
import { getUserListReducer, getSearchedUsersReducer } from './userListReducers'
import {
  userEditDetailsReducer,
  userPrimeReducer,
  userPrimePlusReducer,
  updatePrimeReducer,
  updatePrimePlusReducer,
  updateBasicReducer,
  updateUserPasswordReducer,
} from './userReducers'
import { alertReducer } from './alertReducers'
import { authReducer } from './authReducers'
import {
  getEventsFullDataReducer,
  deleteEventReducer,
  fetchDataByIdReducer,
} from './eventsReducers'
import { getClassesDataReducer } from './classesReducers'

// import alert from './alert'
// import auth from './auth'
// import util from './utils'

export default combineReducers({
  //   auth,
  //   alert,
  //   util,
  auth: authReducer,
  alert: alertReducer,
  userList: getUserListReducer,
  editUserDetails: userEditDetailsReducer,
  editUserPrimeDetails: userPrimeReducer,
  editUserPrimePlusDetails: userPrimePlusReducer,
  updatePrimeReducer,
  updatePrimePlusReducer,
  updateMandatoryReducer: updateBasicReducer,
  updatePassword: updateUserPasswordReducer,
  searchedUsers: getSearchedUsersReducer,
  events: getEventsFullDataReducer,
  deleteEvent: deleteEventReducer,
  eventById: fetchDataByIdReducer,
  classes: getClassesDataReducer,
})
