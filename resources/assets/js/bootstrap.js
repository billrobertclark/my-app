// Imports
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// Set some globals
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

// Set the router
Vue.use(VueRouter);


let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
