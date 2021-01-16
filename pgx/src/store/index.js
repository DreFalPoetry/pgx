import { createStore,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)