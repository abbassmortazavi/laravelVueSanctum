import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexMain from "../components/views/main/IndexMain";
import Login from "../components/views/auth/Login";
import Register from "../components/views/auth/Register";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component : IndexMain
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];

const router = new VueRouter({
    mode : "history",
    routes
});


export default router;
