import axios from 'axios';

const namespace =
  'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com';

export const getDatas = async label => {
  const url = `${namespace}/${label}/?format=json`;

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

export const getDetail = async (label, id) => {
  const url = `${namespace}/${label}/${id}?format=json`;

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
