import {createServer, Model} from 'miragejs';

import recommands from './data/recommands/recommands';
import foodSets from './data/detail/foodSet';
import foodSingles from './data/detail/foodSingle';
import recSets from './data/detail/recSet';
import recSingles from './data/detail/recSingle';

export default createServer({
  models: {
    foodSet: Model,
    foodSingle: Model,
    recSet: Model,
    recSingle: Model,
  },

  fixtures: {
    foodSets,
    foodSingles,
    recSets,
    recSingles,
  },

  routes() {
    this.namespace = 'api';

    this.get('/recommands', recommands);

    this.get('/foodSets');
    this.get('/foodSets/:id');

    this.get('/foodSingles');
    this.get('/foodSingles/:id');

    this.get('/recSets');
    this.get('/recSets/:id');

    this.get('/recSingles');
    this.get('/recSingles/:id');
  },
});
