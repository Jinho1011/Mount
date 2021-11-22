import React from 'react';
import Gate from './components/Gate';
import {createServer} from 'miragejs';

import homeFoods from './data/home/foods';
import foodSet from './data/detail/foodSet';
import foodSingle from './data/detail/foodSingle';
import recSet from './data/detail/recSet';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/home/foods', homeFoods);
    this.get('/api/detail/foodSet', foodSet);
    this.get('/api/detail/foodSingle', foodSingle);
    this.get('/api/detail/recSet', recSet);
  },
});

export default function App() {
  return <Gate />;
}
