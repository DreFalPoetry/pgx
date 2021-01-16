import axios from 'axios';
import { message } from 'antd';
import { getCookie } from './cookie';
const baseUrl = 'http://123.56.21.11:3000/mock/219';

export const MethodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH:'PATCH'
};

export const request = ({url, method = MethodType.GET, params = {}, config = {}}) => {
  const apiToken = getCookie('token');
  const data = (method === 'GET') ? 'params' : 'data';
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': `${apiToken}`
  };
  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    };
  }
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + url,
      method,
      [data]: params,
      headers
    }).then((res)=>{
      resolve(res.data);
    }).catch(error => {
      console.dir(error);
      message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
      reject(error);
    });
  });
};