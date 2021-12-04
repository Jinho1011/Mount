import {createServer, Model} from 'miragejs';

import recommands from './data/recommands/recommands';
import foodSet from './data/detail/foodSet';
import foodSingle from './data/detail/foodSingle';
import recSet from './data/detail/recSet';
import recSingle from './data/detail/recSingle';

export default createServer({
  routes() {
    this.get('/api/recommands/', recommands, {timing: 3000});
    this.get('/api/detail/foodSet', foodSet);
    this.get('/api/detail/foodSingle', foodSingle);
    this.get('/api/detail/recSet', recSet);
    this.get('/api/detail/recSingle', recSingle);
  },
});
