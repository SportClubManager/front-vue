import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import './axios';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(createPinia().use(piniaPluginPersistedstate));
app.mount('#app');
