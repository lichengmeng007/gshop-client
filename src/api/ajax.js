/*
能发送ajax请求的函数模块
包装axios
函数的返回值是promise对象
axios.get()/post()返回的就是promise对象
 */
import axios from 'axios'

export default function ajax(url, data={}, method='GET') {

  return new Promise(function (resolve, reject) {
    let promise
    // 执行异步ajax请求
    if(method==='GET') {
      promise = axios.get(url, {params: data}) // params配置指定的是query参数
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      alert('请求错误: '+error.message)
    })
  })
}




