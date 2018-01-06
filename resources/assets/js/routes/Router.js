import Components from './Components';
import VueRouter from 'vue-router';

const routes = [
	{
		path: '/',
		component: Components.Landing
	}
];

export default new VueRouter({
	routes,
    mode: 'history'
});