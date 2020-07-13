/*
  *@Description：功能描述
  *@Author:：yoga
  *@Date：2020年07月13日 13:26:33
  *@LastEditTime: 2020年07月13日 13:26:33
*/

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
module.exports = {
  // lintOnSave: false,
  chainWebpack: config => {
    //打包添加哈希值，清楚浏览器缓存
    // config.output.filename('js/[name].[hash].js').end()
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('_c', resolve('./src/components'))
    //   .set('assets', resolve('./src/assets'))
    //   .set('views', resolve('./src/views'))
    //   .set('network', resolve('./src/network'))
    // // 注意 store 和 router 没必要配置
    // config.resolve.alias
    //   .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    //   .set('_c', resolve('src/components'))

    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()
  },
}