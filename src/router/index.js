import { createRouter, createWebHistory } from 'vue-router';//createWebHashHistory
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from '../views/Home.vue';
import NotFound from '../components/404.vue';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/', name:'', component: Home, meta:{title: '首页'} },
    { path: '/about', name:'',  meta:{title: '关于'}, component: () => import(`../views/About.vue`) },
    { path: '/:pathMatch(.*)*',  meta:{title: '404'}, name: 'NotFound', component: NotFound },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes // (缩写) 相当于 routes: routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title}`;
    }
    next();
});

// 全局解析守卫
router.beforeResolve(async to => {});

// 全局后置钩子
router.afterEach((to, from, failure) => {
    // if (!failure) sendToAnalytics(to.fullPath)
});


export default router;
