import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SuiVue from 'semantic-ui-vue';
import store from './store';

Vue.use(SuiVue);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  store: store,
  created: function () {
    this.$axios.get('/contact/list').then(function (response) {
      console.log(response.data);
    })

    // this.$axios({
    //   method: 'get',
    //   url: '/contact/list'
    // }).then(function (response) {
    //   // handle success
    //   console.log(response.data);
    // })
  }
}).$mount('#app')
