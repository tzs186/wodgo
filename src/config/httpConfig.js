import axios from 'axios'
import store from '@/store/index.js'



const http = {}

const instance = axios.create({
  baseURL:process.env.NODE_ENV === 'development' ? '/api' : 'http://101.207.139.80/gatemgr/',
  timeout: 5000,
});

//添加请求拦截器
instance.interceptors.request.use(function (config) {
   if (store.state.UserToken) {
    config.headers.Authorization = store.state.UserToken
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器即异常处理
instance.interceptors.response.use(res=>{
  return res.data
},err=>{
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求出错'
        break
      case 401:
        /*Message.warning({
          message: '授权失败，请重新登录'
        })
        store.commit('LOGIN_OUT')
        setTimeout(() => {
          window.location.reload()
        }, 1000)*/

        return
      case 403:
        err.message = '拒绝访问'
        break
      case 404:
        err.message = '请求错误,未找到该资源'
        break
      case 500:
        err.message = '服务器端出错'
        break
    }
  } else {
    err.message = '连接服务器失败'
  }
/*  Message.error({
    message: err.message
  })*/
  return Promise.reject(err.response)
})

http.get = function(url, options) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then(response => {
        if (response.code === 200) {
          resolve(response.data)
        } else {
         /* Message.error({
            message: response.message
          })*/
          reject(response.message)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

http.post = function(url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then(response => {
        if (response.code === 200) {
          resolve(response.data)
        } else {
          /*Message.error({
            message: response.message
          })*/
          reject(response.message)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

export default http
