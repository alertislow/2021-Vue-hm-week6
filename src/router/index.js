import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/product/:id',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/orders',
    component: () => import('@/views/Orders.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/admin/DashboardProducts.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/admin/DashboardOrders.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/admin/DashboardCoupons.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
