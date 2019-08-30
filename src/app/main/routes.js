export default [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "main" */ './views/Main'),
  },
]
