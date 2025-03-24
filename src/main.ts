import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from '@/router';
app.use(router);

import '@/assets/css/app.css';

import PerfectScrollbar from 'vue3-perfect-scrollbar';
app.use(PerfectScrollbar);

import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

import appSetting from '@/app-setting';
appSetting.init();

import i18n from '@/i18n';
app.use(i18n);

import { TippyPlugin } from 'tippy.vue';
app.use(TippyPlugin);

import Maska from 'maska';
app.use(Maska);

import VueEasymde from 'vue3-easymde';
import 'easymde/dist/easymde.min.css';
app.use(VueEasymde);

import Popper from 'vue3-popper';
app.component('Popper', Popper);

import vue3JsonExcel from 'vue3-json-excel';
app.use(vue3JsonExcel);

app.mount('#app');

import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
app.use(Vue3ColorPicker)

import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
app.component('DatePicker', Vue3PersianDatetimePicker)