export default [
  { name: '主页', path: '/', icon: 'smile', component: './Index/Index.tsx' },
  { name: '查看接口', path: '/interface_info/:id',  icon: 'smile', component: './InterfaceInfo/Index.tsx', hideInMenu: true },
  { name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
