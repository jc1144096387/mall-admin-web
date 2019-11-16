// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios';


/*
** 商品相关api
*/

// 获取商品信息 多条件
export const getGoodsListData = (params) => {
  return getRequest('/goods/getByCondition', params)
}
// 获取全部商品信息
export const getAllGoodsData = (params) => {
  return getRequest('/goods/getAll', params)
}
// 添加商品信息
export const addGoods = (params) => {
  return postRequest('/goods/add', params)
}
// 删除商品信息
export const deleteGoods = (ids, params) => {
  return deleteRequest(`/goods/delByIds/${ids}`, params)
}
// 处理商品信息
export const dealWithGoods = (params,query) => {
  return postRequest('/goods/dealWith', params,query)
}