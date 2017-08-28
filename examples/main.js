import Vue from 'vue';
import App from './App.vue';
import YealinkUI from '../src/index.js';

Vue.use(YealinkUI);

new Vue({
    el: '#app',
    render: h => h(App)
});
