// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios';


/*
** 用户相关api
*/

// 获取用户信息 多条件
export const getUserListData = (params) => {
  return getRequest('/user/getByCondition', params)
}
// 获取全部用户信息
export const getAllUserData = (params) => {
  return getRequest('/user/getAll', params)
}
// 添加用户信息
export const addUser = (params) => {
  return postRequest('/user/add', params)
}
// 删除用户信息
export const deleteUser = (ids, params) => {
  return deleteRequest(`/user/delByIds/${ids}`, params)
}
// 处理用户信息
export const dealWithUser = (params,query) => {
  return postRequest('/user/dealWith', params,query)
}