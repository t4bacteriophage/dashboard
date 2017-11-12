/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Login (but not)
  {
    path: '/totallynotlogin',
    name: 'totallynotlogin.index',
    component: () => import('@/pages/totallynotlogin/Index'),

    // Definitely not if the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
