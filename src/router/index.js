import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home/Home.vue";
import About from "@/views/About/About.vue";
import ContactUs from "@/views/ContactUs/ContactUs.vue";
import ProductPage from "@/views/ProductPage/ProductPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/product-page",
    name: "ProductPage",
    component: ProductPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
