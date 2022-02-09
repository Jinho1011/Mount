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

function isObject(val) {
  if (val === null) {
    return false;
  }
  return typeof val === 'function' || typeof val === 'object';
}

const GET = async endpoint => {
  let config = {
    method: 'get',
    url: `${namespace}/${endpoint}`,
    headers: {},
  };

  return await axios(config)
    .then(async response => {
      return await response.data;
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
  let data = qs.stringify(body);
  let config = {
    method: 'put',
    url: `${namespace}/${endpoint}/${id}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

export const getItemsbyId = async (type, id) => {
  const items = await GET(ITEMS);
  const find = items.find(
    item => item.itemId === String(id) && item.type === type,
  );
  return find;
};

export const getLikeCount = async (type, id) => {
  const items = await GET(ITEMS);
  const find = items.find(
    item => item.itemId === String(id) && item.type === type,
  );
  return find.like;
};

export const getLiked = async jwt => {
  const user = await getUser(jwt);
  const liked = isObject(user.liked) ? user.liked : JSON.parse(user.liked);
  return liked;
};

export const getUser = async jwt => {
  const users = await GET(USERS);
  const find = users.find(user => user.key == jwt);
  return find;
};

export const getIsLiked = async (jwt, type, id) => {
  const item = await getItemsbyId(type, id);
  const user = await getUser(jwt);
  const liked = isObject(user.liked) ? user.liked : JSON.parse(user.liked);
  return liked.findIndex(e => e.id === item.id) > -1;
};

export const addItem = async (type, id) => {
  const res = await POST(ITEMS, {type: type, itemId: id, like: 0});
  return await res;
};

export const addUser = async jwt => {
  const found = await getUser(jwt);
  if (found) {
    return null;
  } else {
    const res = await POST(USERS, {key: jwt, liked: []});
    return await res;
  }
};

export const like = async (jwt, type, id) => {
  const item = await getItemsbyId(type, id);
  const user = await getUser(jwt);
  const liked = isObject(user.liked) ? user.liked : JSON.parse(user.liked);
  const addedLiked = [...liked, item];

  const itemRes = await PUT(ITEMS, item.id, {
    like: parseInt(item.like) + 1,
  });
  const userRes = await PUT(USERS, user.id, {
    liked: JSON.stringify(addedLiked),
  });
};

export const unlike = async (jwt, type, id) => {
  const item = await getItemsbyId(type, id);
  const user = await getUser(jwt);
  const liked = isObject(user.liked) ? user.liked : JSON.parse(user.liked);

  const itemRes = await PUT(ITEMS, item.id, {
    like: parseInt(item.like) - 1,
  });
  const userRes = await PUT(USERS, user.id, {
    liked: JSON.stringify(liked.filter(e => e.id !== item.id)),
  });
};

// todo: typescript와 class로 구현해보기
