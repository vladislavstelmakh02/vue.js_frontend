import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
