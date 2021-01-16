import { request, MethodType } from './request';

export function userLogin(params){
  return request({
    url: '/pub/login',
    method: MethodType.POST,
    params
  });
}

export function getSysData(){
  return request({
    url: '/pub/sysLookUp'
  });
}