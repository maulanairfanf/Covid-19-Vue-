import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import VueSocialSharing from 'vue-social-sharing'


Vue.config.productionTip = false
Vue.use(VueSocialSharing);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')