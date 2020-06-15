

import Vue from "vue";

import VueRouter from "vue-router";


Vue.use(VueRouter);


import { routes } from "./routes";


export const router = new VueRouter({
  base: "/", 
  mode: "history", //hash模式
  routes
});
