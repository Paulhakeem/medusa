import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import createAccount from '../views/createAccount.vue'
import { auth } from '../firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard, 
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: createAccount
    }
  ]
})

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener(),
//         resolve(user)
//       },
//       reject
//     )
//   })
// }



router.beforeEach(async(to, from, next) =>{
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'login'})

  else next()
})

export default router
