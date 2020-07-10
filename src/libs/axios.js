import axios from 'axios'
import store from '@/store'
import Vue  from 'vue'
import {getToken,setToken,filterText,objForText,isArrayFn} from '@/libs/util'
import config from '@/config'

const baseUrl = webConfig.api[webConfig.appDefaultApi]

const addErrorLog = errorInfo => {
  const { statusText, status, request: { responseURL } } = errorInfo
  let info = {
    type: 'ajax',
    code: status,
    mes: statusText,
    url: responseURL
  }
  if (!responseURL.includes('save_error_logger')) store.dispatch('addErrorLog', info)
}

// token 刷新
const getTokenNew =()=>{
  if(getToken() == false)return;
  axios.post(baseUrl+'Authentication/token/refresh?token='+getToken(),{},{
    headers:{
      Authorization:'Bearer ' + getToken()
    }
  }).then(ret=>{
    if(ret.data.GatewayStatus==1 && ret.data.Data.Token!=false)setToken(ret.data.Data.Token);
  }).catch(err=>{
    store.state.user.acountOut += 1;
  })
}

//定时请求token 
setInterval(() => {
  getTokenNew(); 
},config.refreshTiem*60000); 

// 页面刷新后， 请求token;
setTimeout(()=>{
  getTokenNew();
},config.refreshTiem*1000)

const errStr = ['401:失败:很抱歉，您无权访问该接口，请确保已经登录!','403：失败:很抱歉，您的访问权限等级不够，联系管理员!'];

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data:{},
      // transformRequest: [function (data) {
      //   //在向服务器发送前，修改请求数据 对 data 进行任意转换处理
      //   // if(isArrayFn(data))data = objForText(data);
      //   // else if(typeof(data)=='object')data = objForText(data);
      //   return JSON.stringify(data);
      // }],
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      
      //除登录外，添加token
      if(config.url.indexOf('Authentication/login') == -1)
      config.headers.Authorization = 'Bearer ' + getToken();

      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)     
      const { data, status } = res

      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      
      if(errStr.join().indexOf(errorInfo.data.GatewayMessage)>-1){
        if(!getToken()) store.state.user.acountOut += 1;
        else getTokenNew();
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
