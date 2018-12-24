/*
包含n个用于间接更新状态数据的方法的对象
 */

import {
  reqAddress,
  reqShops,
  reqCategorys
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {

  // 异步获取地址信息
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获食品分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表
  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
}
