require('./bootstrap');
window.Vue = require('vue').default;
import router from './routes/routes.js';



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});
