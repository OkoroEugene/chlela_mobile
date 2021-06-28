import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger'

function rootReducer(state, action) {
  return appReducer(state, action);
}

const enhancers = compose(
  applyMiddleware(thunkMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
