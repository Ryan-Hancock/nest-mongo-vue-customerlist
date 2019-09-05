import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EditComponent from "@/components/customer/Edit";
import CreateComponent from "@/components/customer/Create";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/create", name: "Create", component: CreateComponent },
    { path: "/edit/:id", name: "Edit", component: EditComponent }
  ]
});
