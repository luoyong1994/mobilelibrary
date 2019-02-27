import Vue from "vue";
import VueRouter from "vue-router";
import index from "../components/view/index"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);
var router =  new VueRouter({
    routes:[
        {
            path: '/',
            name: 'login',
            component: index
          },
    ]
});

export default router;