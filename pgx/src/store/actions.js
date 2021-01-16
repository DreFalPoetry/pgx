import * as actionType  from './actionType'

export const setGlobalData = (data) => ({
  type: actionType.SET_DATA,
  data
})