/*
包含n个接口请求函数的模块
每个函数返回promise
 */
import ajax from './ajax'


const BASE = '/api'  // 开发环境下需要使用代理帮我们转发请求


export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)

// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASE + '/index_category')

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude})
