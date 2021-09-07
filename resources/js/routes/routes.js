import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexMain from "../components/views/main/IndexMain";
import Login from "../components/views/auth/Login";
import Register from "../components/views/auth/Register";
import Dashboard from "../components/views/main/Dashboard";
import AccountData from "../components/views/main/AccountData";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component : IndexMain,
        children:[
            {
                path: '/dashboard',
                name: 'Dashboard',
                components:{
                    default: IndexMain,
                    MainView: Dashboard
                }
            },
            {
                path: '/accounts',
                name: 'Account',
                components:{
                    default: IndexMain,
                    MainView: AccountData
                }
            },
        ]
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
    },

];

const router = new VueRouter({
    routes,
    mode : "history"

});


export default router;
