import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reduxLogger from 'redux-logger';
import rootReducer from 'Ducks/root';

const store = createStore(
  rootReducer,
  applyMiddleware(
    reduxLogger,
    thunkMiddleware
  )
)

export default store;
