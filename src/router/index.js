import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/pages/home/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/employees",
    name: "employees",
    component: () => import("../views/pages/employees/EmployeesIndexPage"),
  },
  {
    path: "/employees/:id",
    name: "employees.show",
    component: () => import("../views/pages/employees/EmployShowPage"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
