import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},

  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/homePage',
    },
    {
      name: 'xAST测试',
      path: '/homePage',
      component: './xAST',
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
    }
  ],
  npmClient: 'pnpm',
});

