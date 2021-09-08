require('./bootstrap');
window.Vue = require('vue').default;
import router from './routes/routes.js';
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

//create toast message
window.toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    /*didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }*/
})



// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-header', require('./components/views/section/Header').default);



const app = new Vue({
    el: '#app',
    router
});
