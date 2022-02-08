import axios from 'axios';
import qs from 'query-string';

const namespace = 'https://62012796fdf5090017249898.mockapi.io';

// endpoints
export const ITEMS = 'items';
export const USERS = 'users';

// types
export const FOOD_SINGLE = 'foodSingle';
export const FOOD_SET = 'foodSet';
export const REC_SINGLE = 'recSingle';
export const REC_SET = 'recSet';

const GET = async endpoint => {
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

const POST = async (endpoint, body) => {
  let config = {
    method: 'post',
    url: `${namespace}/${endpoint}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(body),
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

const PUT = async (endpoint, id, body) => {
  let config = {
    method: 'put',
    url: `${namespace}/${endpoint}/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(body),
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

// GET
export const getFavbyId = async (type, id) => {
  const items = await GET(ITEMS);
  return items.find(item => item.itemId === id && item.type === type);
};

export const getUser = async jwt => {
  const users = await GET(USERS);
  return users.find(user => user.key === jwt);
};

// POST
export const addItem = async (type, id) => {
  const res = await POST(ITEMS, {type: type, itemId: id, like: 0});
  return res;
};

export const addUser = async jwt => {
  const res = await POST(USERS, {key: jwt, liked: []});
  return res;
};

// PUT
export const like = async (jwt, type, id) => {
  const item = await getFavbyId(type, id);
  const user = await getUser(jwt);

  const itemRes = await PUT(ITEMS, item.id, {like: item.like + 1});
  const userRes = await PUT(USERS, user.id, {liked: [...user.liked, item]});
};

export const unlike = async (jwt, type, id) => {
  const item = await getFavbyId(type, id);
  const user = await getUser(jwt);

  const itemRes = await PUT(ITEMS, item.id, {like: item.like - 1});
  const userRes = await PUT(USERS, user.id, {
    liked: user.liked.filter(e => e.id !== item.id),
  });
};

// todo: typescript와 class로 구현해보기
