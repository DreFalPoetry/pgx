import * as actionType  from './actionType';

export const setGlobalData = (data) => ({
  type: actionType.SET_DATA,
  data
});
export const setSmallData = (data) => ({
  type: actionType.SET_SMALLDATA,
  data
});