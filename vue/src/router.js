import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from 'components/Post'

const routes = [
  { path: '/', redirect: '/post' },
  { path: '/post', component: Post },
]

const router = new VueRouter({
	routes
})

export default router