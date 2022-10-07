import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import Details from './DetailsPage/DetailsPage';

const rootReducer = combineReducers({
  Details,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
