import axios from 'axios'
import {Message} from 'element-ui'

//和后端约定，post数据时需要是这种类型的
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded'
//加入这个以后，后面调用东西的时候就不用加这一长串，只需加后面的相对路径
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true //跨域请求不带cookie，加这个就是告诉浏览器，也带上cookie

export default function requset(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      methods: type
    }
    if (type, toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}
