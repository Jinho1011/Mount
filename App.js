import React from 'react';
import Gate from './components/Gate';
import {createServer} from 'miragejs';

import homeFoods from './data/home/foods';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/home/foods', homeFoods);
  },
});

export default function App() {
  return <Gate />;
}
