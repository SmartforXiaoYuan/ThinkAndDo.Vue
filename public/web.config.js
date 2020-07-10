/**
 * 系统发布相关的全局变量
 * 和业务相关的全局变量放在.env中和config/index.js下
 */
var webConfig = {
  // 产品网址配置
  site: {},
  // app api网址配置
  api: {
    dev: 'http://localhost:3000/', // 开发
    pro: 'http://localhost:3000/', // 开发测试
  },
  // 因为暂时没有其他域名的api，这里的设置默认所有的接口都来自同一个域
  appDefaultApi: 'dev',
  // api版本
  apiVersion: 'V1'
}
