import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Demo from '@/components/Demo.vue'
import Counter from '@/components/Counter.vue'
import NotFound from '@/components/404.vue'

Vue.use(Router)

const Home = { template: '<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

export default new Router({
  mode: 'history',
  routes: [
    { path: '/counter', name: 'counter', component: Counter },
    { path: '/demo', name: 'demo', component: Demo },
    { path: '/', component: HelloWorld },
    { path: '/home', name: 'home', component: Home },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar },
    { path: '*', component: NotFound }
  ]
})
