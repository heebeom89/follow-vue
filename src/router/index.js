import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

console.log(process.env.BASE_URL, "==============")
const router = createRouter({
    
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ]
})

export default router
