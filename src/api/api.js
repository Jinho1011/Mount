import axios from 'axios';

const namespace = '/api';

const getDetail = (label, id) => {
  return axios.get(`${namespace}/${label}/${id}`).then(response => {
    return response.data;
  });
};

const getDetails = label => {
  return axios.get(`${namespace}/${label}`).then(response => {
    return response.data;
  });
};

export {getDetail, getDetails};
