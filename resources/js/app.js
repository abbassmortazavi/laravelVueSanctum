require('./bootstrap');
window.Vue = require('vue').default;
import router from './routes/routes.js';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
const opts = {}


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('MyApp', require('./App.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(opts)
});
