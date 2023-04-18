import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {createPinia} from "pinia";
import Vant from 'vant';
import 'vant/lib/index.css';
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App)
    .use(createPinia())
    .use(router)
    .use(NutUI)
    .use(Vant)
    .use(ElementPlus)
    .mount('#app')

