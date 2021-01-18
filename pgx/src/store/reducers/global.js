import { SET_DATA }  from '../actionType';

const initState = {
  globalData: {}
};
export default (state = initState, action) =>{
  switch(action.type) {
  case SET_DATA:
    return {...state, globalData: action.data };
  default:
    return state;
  }
};