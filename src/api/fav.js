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
  const items = await GET(ITEMS);
  const user = await getUser(jwt);
  const liked = isObject(user.liked) ? user.liked : JSON.parse(user.liked);
  return liked;
};

export const getUser = async jwt => {
  const users = await GET(USERS);
  const find = users.find(user => user.key === jwt);
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

  const itemRes = await PUT(ITEMS, item.id, {
    like: parseInt(item.like) + 1,
  });
  const userRes = await PUT(USERS, user.id, {
    liked: JSON.stringify([...liked, item]),
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

// [{"id":"1","type":"foodSet","like":"0","itemId":"1"},{"type":"foodSet","itemId":"6","like":"0","id":"2"},{"type":"foodSet","itemId":"5","like":"0","id":"3"},{"type":"foodSet","itemId":"4","like":"0","id":"4"},{"type":"foodSet","itemId":"3","like":"0","id":"5"},{"type":"foodSet","itemId":"2","like":"0","id":"6"},{"type":"foodSet","itemId":"4","like":"0","id":"7"},{"type":"foodSet","itemId":"1","like":"0","id":"8"},{"type":"foodSet","itemId":"3","like":"0","id":"7"},{"type":"foodSet","itemId":"2","like":"0","id":"8"},{"type":"foodSet","itemId":"6","like":"0","id":"9"},{"type":"foodSingle","itemId":"20","like":"0","id":"10"},{"type":"foodSingle","itemId":"22","like":"0","id":"11"},{"type":"foodSingle","itemId":"21","like":"0","id":"12"},{"type":"foodSingle","itemId":"24","like":"0","id":"13"},{"type":"foodSingle","itemId":"23","like":"0","id":"13"},{"type":"foodSingle","itemId":"25","like":"0","id":"14"},{"type":"foodSingle","itemId":"27","like":"0","id":"15"},{"type":"foodSingle","itemId":"17","like":"0","id":"16"},{"type":"foodSingle","itemId":"29","like":"0","id":"16"},{"type":"foodSingle","itemId":"14","like":"0","id":"16"},{"type":"foodSingle","itemId":"10","like":"0","id":"17"},{"type":"foodSingle","itemId":"11","like":"0","id":"18"},{"type":"foodSingle","itemId":"41","like":"0","id":"18"},{"type":"foodSingle","itemId":"30","like":"0","id":"19"},{"type":"foodSingle","itemId":"6","like":"0","id":"19"}]
// [{"key":"2106295797","liked":[],"id":"1"}]
