import Vue from 'vue'

// Optional. When using scrollOverflow:true
import 'fullpage.js/vendors/scrolloverflow'
// Optional. When using fullpage extensions
//import './fullpage.scrollHorizontally.min'
import VueFullPage from 'vue-fullpage.js'

// import App from './App.vue'
import Chenx2018 from './components/Chenx2018.vue'

Vue.use(VueFullPage)
Vue.config.productionTip = false

new Vue({
  render: h => h(Chenx2018)
}).$mount('#app')
