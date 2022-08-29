import { createApp } from 'vue';
import './styles/element/index.scss';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/mock/mock';

createApp(App).use(store).use(router).use(ElementPlus)
  .mount('#app');
