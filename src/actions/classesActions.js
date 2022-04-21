import axios from 'axios'
import {
  GET_CLASSES_FULL_DATA_REQUEST,
  GET_CLASSES_FULL_DATA_SUCCESS,
  GET_CLASSES_FULL_DATA_FAILURE,
} from '../constants/classesConstants'
import { getClassesFullData } from '../utils/config/API'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}

export const getClassesData = () => async (dispatch) => {
  dispatch({ type: GET_CLASSES_FULL_DATA_REQUEST })
  try {
    const res = await axios.get(getClassesFullData, config)

    dispatch({
      type: GET_CLASSES_FULL_DATA_SUCCESS,
      payload: {
        classes: res.data.body,
        success: 'Successfully retrieved class list',
      },
    })
  } catch (error) {
    dispatch({
      type: GET_CLASSES_FULL_DATA_FAILURE,
      payload: {
        error: 'Unable to get class list',
      },
    })
  }
}
