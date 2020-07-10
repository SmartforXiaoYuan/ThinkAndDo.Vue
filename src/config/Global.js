/*
  *功能：功能描述
  *@Author:：yoga
  *@Date：2020年07月09日 11:00:49
  * @LastEditTime: 2020-03-12 19:34:00
 */
 
exports.install = function (Vue) {
    // Vue.prototype.$target = " :3000/"; // 线上后端地址
    Vue.prototype.$target = "http://localhost:3000/"; // 本地后端地址
    // 封装提示成功的弹出框
    Vue.prototype.notifySucceed = function (msg) {
      this.$notify({
        title: "成功",
        message: msg,
        type: "success",
        offset: 100
      });
    };
    // 封装提示失败的弹出框
    Vue.prototype.notifyError = function (msg) {
      this.$notify.error({
        title: "错误",
        message: msg,
        offset: 100
      });
    };
  }