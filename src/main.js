import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './router'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.use(VueI18n);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
