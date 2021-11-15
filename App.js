import React from 'react';
import Gate from './components/Gate';
import {createServer} from 'miragejs';

import homeFoods from './data/home.foods';
import foodSet from './data/detail/foodSet';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/home/foods', homeFoods);
    this.get('/api/detail/foodSet', foodSet);
  },
});

export default function App() {
  return <Gate />;
}
