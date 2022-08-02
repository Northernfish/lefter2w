import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import store from './store'

const app = createApp(App);// 在使用的时候要定义类型
app.use(createPinia())
    .use(store)
    .use(router)
    .mount('#app');
