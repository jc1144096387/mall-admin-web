// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios';


/*
** 订单相关api
*/

// 获取订单信息 多条件
export const getOrderListData = (params) => {
  return getRequest('/order/getByCondition', params)
}
// 获取全部订单信息
export const getAllOrderData = (params) => {
  return getRequest('/order/getAll', params)
}
// 添加订单信息
export const addOrder = (params) => {
  return postRequest('/order/add', params)
}
// 删除订单信息
export const deleteOrder = (ids, params) => {
  return deleteRequest(`/order/delByIds/${ids}`, params)
}
// 处理订单信息
export const dealWithOrder = (params,query) => {
  return postRequest('/order/dealWith', params,query)
}