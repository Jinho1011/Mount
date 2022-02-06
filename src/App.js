import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import Gate from './components/Gate';
import recommandsReducer from './store/reducers/recommands';
import usersReducer from './store/reducers/users';
import plannersReducer from './store/reducers/planners';
import searchReducer from './store/reducers/search';

const rootReducer = combineReducers({
  recommands: recommandsReducer,
  users: usersReducer,
  planners: plannersReducer,
  search: searchReducer,
});

const store = createStore(rootReducer);

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <Gate />
    </Provider>
  );
}
