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

const initialStateEvents = {
  loading: false,
  events: [],
  error: null,
  success: null,
}

const initialStateDeleteEvent = {
  loading: false,
  error: null,
  success: null,
}

const initialStateEventById = {
  loading: false,
  eventByIdData: [],
  eventTags: [],
  error: null,
  success: null,
}

export const getEventsFullDataReducer = (
  state = initialStateEvents,
  action
) => {
  switch (action.type) {
    case GET_EVENTS_FULL_DATA_REQUEST:
      return { ...state, loading: true, events: [] }
    case GET_EVENTS_FULL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload.events,
        success: action.payload.success,
        error: null,
      }
    case GET_EVENTS_FULL_DATA_FAILURE:
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

export const deleteEventReducer = (state = initialStateDeleteEvent, action) => {
  switch (action.type) {
    case DELETE_EVENT_REQUEST:
      return { ...state, loading: true }
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        error: null,
      }
    case DELETE_EVENT_FAILURE:
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

export const fetchDataByIdReducer = (state = initialStateEventById, action) => {
  switch (action.type) {
    case FETCH_DATA_BY_ID_REQUEST:
      return { ...state, loading: true, eventByIdData: [], eventTags: [] }
    case FETCH_DATA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        eventByIdData: action.payload.eventByIdData,
        eventTags: action.payload.eventTags,
        success: action.payload.success,
        error: null,
      }
    case FETCH_DATA_BY_ID_FAILURE:
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
