import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
// import Loading from 'vue-loading-overlay';
// import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

// import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

window.$ = $;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
