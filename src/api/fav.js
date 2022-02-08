import axios from 'axios';

const namespace = 'https://62012796fdf5090017249898.mockapi.io';

export const TERMS = 'temrs';
export const ITEMS = 'items';
export const USERS = 'users';

const get = async endpoint => {
  let config = {
    method: 'get',
    url: `${namespace}/${endpoint}`,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const getById = async (endpoint, id) => {
  let config = {
    method: 'get',
    url: `${namespace}/${endpoint}/${id}`,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const post = async (endpoint, body) => {
  let data = qs.stringify({
    type: 'recSet',
    itemId: '23',
    like: '0',
  });
  let config = {
    method: 'post',
    url: 'https://62012796fdf5090017249898.mockapi.io/items',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  axios(config)
    .then(response => {
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getFavbyId = async (type, id) => {
  const items = await get(ITEMS);
  return items.find(item => item.itemId === id && item.type === type);
};
