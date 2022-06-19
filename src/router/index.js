import { createRouter, createWebHistory } from 'vue-router'
import StartPage from "@/components/StartPage";
import Login from "@/views/auth/Login";

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartPage
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
