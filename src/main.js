import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
//core
import "primevue/resources/primevue.min.css";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";  

const app = createApp(App)
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app')
