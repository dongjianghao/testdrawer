import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Dialog, Drawer } from 'element-ui';


Vue.use(Button)
Vue.use(Drawer)
Vue.use(Dialog);



Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
