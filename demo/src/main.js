import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Andromeda from './../../src/install';

Vue.use(Andromeda);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
