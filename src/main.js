import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/base.css';

import './assets/css/carousel.css';
import './assets/css/doc.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/login.css';
import './assets/css/theme.css';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css';
import 'animate.css';
// 这个nprogress样式必须引入
import 'nprogress/nprogress.css'

import * as Elicons from '@element-plus/icons-vue';

import { createPinia } from 'pinia'

const app = createApp(App)

//全局注册element plus icon
Object.keys(Elicons).forEach((key) => {
    app.component(key, Elicons[key]);
});

app.use(router).use(createPinia()).mount('#app')
