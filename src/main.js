import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from "bootstrap-vue-3";
import '@/assets/app.css';

createApp(App).use(BootstrapVue).use(router).mount('#app');
