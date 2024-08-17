import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import './assets/main.css';
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap";
import Aura from '@primevue/themes/aura';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import Dialog from 'primevue/dialog';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(bootstrap);
app.use(VueSweetalert2);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Drawer', Drawer);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.use(router)

app.mount('#app')
