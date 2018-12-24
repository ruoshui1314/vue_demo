import axios from 'axios'

var instance = axios.create()
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.timeout = 5000
instance.defaults.baseURL = ''

instance.interceptors.response.use(response => {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  }
  console.log('axios response error ', response)
  return Promise.reject(response.statusText)
}, error => {
  console.log('axios network error ', error.message)
  return Promise.reject(error.response.statusText)
})

let api = {
  post (url, params) {
    return instance.post(url, params)
  },
  get (url) {
    return instance.get(url)
  },
  put (url, params) {
    return instance.put(url, params)
  },
  delete (url) {
    return instance.delete(url)
  }
}

export default api
