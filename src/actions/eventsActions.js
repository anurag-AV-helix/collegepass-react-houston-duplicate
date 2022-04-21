/* eslint-disable prefer-template */
/* eslint-disable no-restricted-syntax */
import axios from 'axios'
import {
  GET_EVENTS_FULL_DATA_REQUEST,
  GET_EVENTS_FULL_DATA_SUCCESS,
  GET_EVENTS_FULL_DATA_FAILURE,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  FETCH_DATA_BY_ID_REQUEST,
  FETCH_DATA_BY_ID_SUCCESS,
  FETCH_DATA_BY_ID_FAILURE,
} from '../constants/eventsConstants'
import {
  getEventFullData,
  deleteEvent,
  getEventFullDataByID,
} from '../utils/config/API'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

export const getEventsFullData = () => async (dispatch) => {
  dispatch({ type: GET_EVENTS_FULL_DATA_REQUEST })
  try {
    const res = await axios.get(getEventFullData, config)

    dispatch({
      type: GET_EVENTS_FULL_DATA_SUCCESS,
      payload: {
        events: res.data.body,
        success: 'Successfully retrieved events list',
      },
    })
  } catch (error) {
    dispatch({
      type: GET_EVENTS_FULL_DATA_FAILURE,
      payload: {
        error: 'Unable to get events list',
      },
    })
  }
}

export const deleteEventAction = (id) => async (dispatch) => {
  dispatch({ type: DELETE_EVENT_REQUEST })
  try {
    const res = await axios.delete(deleteEvent + id, config)

    dispatch({
      type: DELETE_EVENT_SUCCESS,
      payload: {
        message: res.data.message,
        success: 'Successfully deleted event',
      },
    })
  } catch (error) {
    dispatch({
      type: DELETE_EVENT_FAILURE,
      payload: {
        error: 'Unable to get delete event',
      },
    })
  }
}

export const fetchDataById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_BY_ID_REQUEST })
  try {
    const res = await axios.get(getEventFullDataByID + id, config)
    const body = res.data.body

    dispatch({
      type: FETCH_DATA_BY_ID_SUCCESS,
      payload: {
        eventByIdData: {
          event_id: body[0].ID,
          event_name: body[0].NAME,
          event_desc: body[0].DESC,
          event_datetime: body[0].DATE_TIME,
          event_zoom_id: body[0].ZOOMID,
          event_password: body[0].ZOOM_PASS,
          event_primeplus: body[0].PREMIUM_LEVEL,
          event_type: body[0].EVENT_TYPE,
          event_isdeleted: body[0].IS_DELETED,
          event_banner: body[0].banner_image,
          event_tile: body[0].BANNER_IMAGE,
          event_premium_level: body[0].PREMIUM_LEVEL,
        },
        eventTags: body[0]?.TAGS?.split(','),
        success: 'Successfully retrieved event by id',
      },
    })
  } catch (error) {
    dispatch({
      type: FETCH_DATA_BY_ID_FAILURE,
      payload: {
        error: 'Unable to get event by id',
      },
    })
  }
}
