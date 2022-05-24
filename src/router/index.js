import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginMain"),
  },
  {
    path: "/chooseprofile",
    name: "chooseProfile",
    component: () => import("../views/ChooseProfile"),
  },
  {
    path: "/eimzo",
    name: "EimzoLogin",
    component: () => import("../views/EimzoLogin"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("../views/Register"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/registerwitheimzo",
    name: "RegWithEimzo",
    component: () => import("../views/RegWithEimzo"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/registerwithouteimzo",
    name: "RegWithoutEimzo",
    component: () => import("../views/RegWithoutEimzo"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/typecompany",
    name: "TypeCompany",
    component: () => import("../views/TypeCompany"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/register1",
    name: "RegisterPage1",
    component: () => import("../views/Reg"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/register2",
    name: "RegisterPage2",
    component: () => import("../views/Reg1"),
    meta: {
      carousel: true,
    },
  },
  {
    path: "/success",
    name: "Successful",
    component: () => import("../views/Successful"),
    meta: {
      successfulPage: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
