import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import {store} from './store/store'

import vuetify from './plugins/vuetify';
import router from './router';
Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
	store,
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app');
