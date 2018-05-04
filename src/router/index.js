import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
	  {
			path: '/',
			component: () => import('@/pages/home.vue'),
		},
		{
			path: '/project',
			component: () => import('@/pages/project.vue')
		},
		{
			path: '/capital',
			component: () => import('@/pages/capital.vue')
		}
	]
})