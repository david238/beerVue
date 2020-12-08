import Vue from 'vue';
import Router from 'vue-router';
import Beers from '@/components/Beers';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Beers',
            component: Beers
        }
    ]
});