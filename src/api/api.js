import axios from 'axios';
import qs from 'query-string';

const namespace =
  'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com';

export const getJWT = async value => {
  let config = {
    method: 'post',
    url: 'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com/login/?format=json',
    headers: {
      Connection: 'keep-alive',
      Pragma: 'no-cache',
      'Cache-Control': 'no-cache',
      'Upgrade-Insecure-Requests': '1',
      Origin:
        'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com',
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
      Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      Referer:
        'http://mountwit-env.eba-zesvwpfj.ap-northeast-2.elasticbeanstalk.com/login/',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    },
    data: qs.stringify(value),
  };

  return await axios(config)
    .then(response => {
      return JSON.stringify(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

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
      throw error;
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
      throw error;
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
  const url = `${namespace}/recs/?format=json&id=${id}`;

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
      throw error;
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
      throw error;
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
      throw error;
    });
};
