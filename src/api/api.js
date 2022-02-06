import axios from 'axios';

const namespace =
  'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com';

export const getFoods = async () => {
  const url = `${namespace}/foods/?format=json`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRecs = async () => {
  const url = `${namespace}/recs/?format=json`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getFoodById = async id => {
  const url = `${namespace}/foods/?format=json&id=${id}`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data[0];
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRecById = async id => {
  const url = `${namespace}/recs/${id}?format=json`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getFoodSets = async () => {
  const url = `${namespace}/foodset/?format=json`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRecSets = async () => {
  const url = `${namespace}/recset/?format=json`;

  let config = {
    method: 'get',
    url,
    headers: {},
  };

  return await axios(config)
    .then(response => {
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};
