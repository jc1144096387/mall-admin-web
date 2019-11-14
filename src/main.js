import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'

Vue.config.productionTip = false

// 全局配置ViewUI组件的一些属性
Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
      arrow: 'md-arrow-dropdown',
      arrowSize: 20
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
