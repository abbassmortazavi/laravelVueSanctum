require('./bootstrap');
window.Vue = require('vue').default;
import Router from './routes/routes';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('MyApp', require('./App.vue').default);

const app = new Vue({
    el: '#app',
    Router
});
