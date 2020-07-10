export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title:'',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://localhost:3000/',       //开发    
  },
  /**
   * @description 默认公司根节点id
   */
  homeCompany: 1000,
    /**
   * @description 默认菜单根节点id 0
   */
  menuHome: 0,
   /**
   * @description 方法分类字典id
   */
  methodClassify: 4,
   /**
   * @description 页面模块编码字典id
   */
  codingId: 9,
   /**
   * @description 审批业务代码 字典id
   */
  businessId: 6,
   /**
   * @description 角色分类 字典id
   */
  roleClassId: 10,
  /**
   * @description token 刷新时间 30分钟
   */
  refreshTiem: 30,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'controlPanel',
  /**
   * @description 需要加载的插件
   */
  plugin: {

  }
}