import { request, MethodType } from './request';
/**登录 */
export function userLogin(params){
  return request({
    url: '/pub/login',
    method: MethodType.POST,
    params
  });
}
// 获取所有list
export function getSysData(){
  return request({
    url: '/pub/sysLookUp'
  });
}
// 获取用户list
export function getUserList(){
  return request({
    url:'/user/list',
    method: MethodType.POST
  });
}
// 获取大分类和小分类
export function getListData(type,params){
  return request({
    url:`/sys/list/${type}`,
    method: MethodType.GET,
    params
  });
}
// 获取总览信息
export function getStatic(){
  return request({
    url:'sys/static',
    method:MethodType.GET
  });
}
// 获取最新报告列表
export function getLestList(bigType,params){
  return request({
    url: `report/list/${bigType}`,
    method: MethodType.POST,
    params
  });
}