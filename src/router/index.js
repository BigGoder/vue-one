import Vue from "vue";
import Router from "vue-router";
import Login from '../pages/Login'
import App from '@/App'
import Home from '@/pages/Home'
import About from '@/pages/About'
import D3 from '@/pages/D3'
import D4 from '@/pages/D4'


Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'app',
        component: App,
        children:[
            {
                path:'/home',
                name:'home',
                component:Home
            },
            {
                path:'/about',
                name:'about',
                component:About
            },
            {
                path:'/d3',
                name:'d3',
                component:D3
            },
            {
                path:'/d4',
                name:'d4',
                component:D4
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },


]

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
  });