import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import Gate from './components/Gate';
import recommandsReducer from './store/reducers/recommands';
import usersReducer from './store/reducers/users';
import api from './mock';

const rootReducer = combineReducers({
  recommands: recommandsReducer,
  users: usersReducer,
});

const store = createStore(rootReducer);

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
