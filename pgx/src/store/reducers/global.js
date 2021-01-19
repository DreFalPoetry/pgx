import { SET_DATA,SET_SMALLDATA }  from '../actionType';

const initState = {
  globalData: {},
  smallData:[]
};
export default (state = initState, action) =>{
  switch(action.type) {
  case SET_DATA:
    return {...state, globalData: action.data };
  case SET_SMALLDATA:
    return {...state, smallData: action.data };
  default:
    return state;
  }
};