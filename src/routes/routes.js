// routes.js
// 此文件编写 路径 和 组件 的对应关系

//引入需要用路由来切换的所有组件

import About from "../components/About.vue";
import Index from "../components/Index.vue";
import News from "../components/News.vue";
import NewsDetail from "../components/NewsDetail";
import Register from "../components/Register";



export const routes = [
  {
    path: "/register",
    component: Register
  },
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/newsdetail",
    component: NewsDetail
  }
];
