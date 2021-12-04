import React from 'react';
import {createServer} from 'miragejs';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import Gate from './components/Gate';

import recommandsReducer from './store/reducers/recommands';

import signup from './data/auth/signup';
import recommands from './data/recommands/recommands';
import foods from './data/foods/foods';
import foodSet from './data/detail/foodSet';
import foodSingle from './data/detail/foodSingle';
import recSet from './data/detail/recSet';
import recSingle from './data/detail/recSingle';

const rootReducer = combineReducers({
  recommands: recommandsReducer,
});

const store = createStore(rootReducer);

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/signup/', signup);
    this.get('/api/recommands/', recommands);
    this.get('/api/foods', foods);
    this.get('/api/detail/foodSet', foodSet);
    this.get('/api/detail/foodSingle', foodSingle);
    this.get('/api/detail/recSet', recSet);
    this.get('/api/detail/recSingle', recSingle);
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <Gate />
    </Provider>
  );
}
