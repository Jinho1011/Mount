import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import * as Sentry from '@sentry/react-native';

import Gate from './components/Gate';
import recommandsReducer from './store/reducers/recommands';
import usersReducer from './store/reducers/users';
import plannersReducer from './store/reducers/planners';
import searchReducer from './store/reducers/search';
import scrollsReducer from './store/reducers/scrolls';

Sentry.init({
  dsn: 'https://be6e0801fa4348a2b7e26d40c40f459d@o1149194.ingest.sentry.io/6221093',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const rootReducer = combineReducers({
  recommands: recommandsReducer,
  users: usersReducer,
  planners: plannersReducer,
  search: searchReducer,
  scrolls: scrollsReducer,
});

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Gate />
    </Provider>
  );
}

export default Sentry.wrap(App);
