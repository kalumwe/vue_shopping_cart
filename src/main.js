import Vue from 'vue';
import App from './app/App.vue';
///import store from './app/store';

Vue.config.productionTip = false

new Vue({
  //store,
  render: h => h(App),
}).$mount('#app')
