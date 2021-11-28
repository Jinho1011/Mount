export const INIT_FOODS = 'INIT_FOODS';
export const INIT_RECS = 'INIT_RECS';

export const initFoods = foods => {
  return {type: INIT_FOODS, foods};
};

export const initRecs = recs => {
  return {type: INIT_RECS, recs};
};
