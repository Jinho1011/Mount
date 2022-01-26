import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import Gate from './components/Gate';
import recommandsReducer from './store/reducers/recommands';
import usersReducer from './store/reducers/users';
import plannersReducer from './store/reducers/planners';
import searchReducer from './store/reducers/search';
import api from './mock';

const rootReducer = combineReducers({
  recommands: recommandsReducer,
  users: usersReducer,
  planners: plannersReducer,
  search: searchReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

if (window.server) {
  server.shutdown();
}

window.server = api;

export default function App() {
  return (
    <Provider store={store}>
      <Gate />
    </Provider>
  );
}
