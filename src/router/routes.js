
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/tarjeta',
    component: () => import('layouts/Tarjeta.vue'),
    /* children: [
      { path: '', component: () => import('pages/Index.vue') }
    ] */
  },
  {
    path: '/politicas',
    component: () => import('layouts/Politicas.vue'),
    /* children: [
      { path: '', component: () => import('pages/Index.vue') }
    ] */
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
