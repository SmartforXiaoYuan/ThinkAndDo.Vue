import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

const webConfig = window.webConfig

Vue.prototype.$webConfig = webConfig
Vue.prototype.$target = "http://localhost:3000/"
console.log(Vue.prototype)




//全局组件
 
import MyList from './components/MyList';
Vue.component(MyList.name, MyList);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
