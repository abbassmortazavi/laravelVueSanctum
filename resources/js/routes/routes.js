import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Index from '../components/views/category/Index';
import Create from "../components/views/category/Create";
import Edit from "../components/views/category/Edit";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home,
    },
    {
        path: '/category',
        name: 'Category',
        component : Index,
    },
    {
        path: '/category/create',
        name: 'Create',
        component : Create,
    },
    {
        path: '/category/:id/edit',
        name: 'Edit',
        component : Edit,
    }

];

const router = new VueRouter({
    routes,
    mode : "history"

});


export default router;
