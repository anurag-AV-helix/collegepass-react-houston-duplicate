import {
  GET_CLASSES_FULL_DATA_REQUEST,
  GET_CLASSES_FULL_DATA_SUCCESS,
  GET_CLASSES_FULL_DATA_FAILURE,
} from '../constants/classesConstants'

const initialStateClasses = {
  loading: false,
  classes: [],
  error: null,
  success: null,
}

export const getClassesDataReducer = (state = initialStateClasses, action) => {
  switch (action.type) {
    case GET_CLASSES_FULL_DATA_REQUEST:
      return { ...state, loading: true, classes: [] }
    case GET_CLASSES_FULL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload.classes,
        success: action.payload.success,
        error: null,
      }
    case GET_CLASSES_FULL_DATA_FAILURE:
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
